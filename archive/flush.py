import re
import filecmp
from os import listdir
from os.path import isfile, join
import time
import shutil
from bs4 import BeautifulSoup
import sys

def getNextNo(archiveFolder):
  fileList = [f for f in listdir(archiveFolder) if isfile(join(archiveFolder, f))]
  maxno = 0
  highestFileName = ''
  for x in fileList:
    try:
      n = re.match('(\d+).*', x).group(1)
    except: #aka catch
      continue
    if n > maxno:
      maxno = int(n)
      highestFileName = x
  nextno = maxno + 1
  return [nextno,highestFileName]

log = open('log.txt', 'a')   # open for writing - append mode
filefrom = 'blankslate.html' # this is assumed in same dir as flush
htmlTarget = '../index.html'
vueTargetDir = '../proj/vue-cli/src/'
#vueTarget = vueTargetDir+'App.vue'
htmlArchive = 'html/'
vueArchive = 'webpack-simple html/'

nextNoHtml, highestFileNameHtml = getNextNo(htmlArchive)
nextNoVue,  highestFileNameVue  = getNextNo(vueArchive)

#extract the title from the html file or python argument
'''
title = ''
soup = BeautifulSoup(open(htmlTarget), "html.parser")
title = soup.title.string
newFilenameFromHtmlTitle = str(nextno).zfill(3)+' - '+title+'.html' '''

newFilenameFromPythonArgHtml = str(nextNoHtml).zfill(3)+' - '+sys.argv[1]+'.html'
vuePrefix = str(nextNoVue).zfill(3)+' '+sys.argv[1]+' - '
vueHighestPrefix = str(nextNoVue-1).zfill(3)+' '+sys.argv[1]+' - '

if not filecmp.cmp(htmlArchive+highestFileNameHtml, htmlTarget):
  shutil.copy2(htmlTarget, htmlArchive+newFilenameFromPythonArgHtml)
  #shutil.copy2(filefrom, htmlTarget) #(optional, reset index.html)
  log.write('\n'+ time.strftime("%I:%M %p %Y/%m/%d") + '\t\t' + newFilenameFromPythonArgHtml)
  print 'Flushed html index: ' + str(nextNoHtml)

isDifferent = False
files = [] #files in the current project directory
for filename in listdir(vueTargetDir):
  if filename.endswith('.vue') or filename.endswith('.js'):
    files.append(filename)
    # print(join(vueTargetDir, filename))

highestFiles = [] #highest indexed files in new directory
for filename in listdir(vueArchive):
  if filename.startswith(str(nextNoVue-1).zfill(3)):
    highestFiles.append(filename)

if len(highestFiles) != len(files):
  isDifferent = True
else:
  for filename in highestFiles:
    for filename2 in files:
      if filename.endswith(filename2):
        if not filecmp.cmp(vueArchive + filename, vueTargetDir+filename2):
          isDifferent = True
          break

if isDifferent:
  for filename in files:
    vueTarget = vueTargetDir + filename
    newFile = vueArchive + vuePrefix + filename
    shutil.copy2(vueTarget, newFile)
    log.write('\n'+ time.strftime("%I:%M %p %Y/%m/%d") + '\t\t' + vuePrefix + filename)
  print 'Flushed vue index: ' + str(nextNoVue)

log.close()
 