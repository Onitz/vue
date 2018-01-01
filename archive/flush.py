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
vueTarget = '../proj/vue-cli/src/App.vue'
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
newFilenameFromPythonArgVue = str(nextNoVue).zfill(3)+' - '+sys.argv[1]+'.vue'

if not filecmp.cmp(htmlArchive+highestFileNameHtml, htmlTarget):
  shutil.copy2(htmlTarget, htmlArchive+newFilenameFromPythonArgHtml)
  #shutil.copy2(filefrom, htmlTarget) #(optional, reset index.html)
  log.write('\n'+ time.strftime("%I:%M %p %Y/%m/%d") + '\t\t' + newFilenameFromPythonArgHtml)
  print 'Flushed htm index: ' + str(nextNoHtml)

if not filecmp.cmp(vueArchive+highestFileNameVue, vueTarget):
  shutil.copy2(vueTarget, vueArchive+newFilenameFromPythonArgVue)
  log.write('\n'+ time.strftime("%I:%M %p %Y/%m/%d") + '\t\t' + newFilenameFromPythonArgVue)
  print 'Flushed vue index: ' + str(nextNoVue)

log.close()
