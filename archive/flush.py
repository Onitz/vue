import re
import filecmp
import os
from os import listdir
from os.path import isfile, join
import time
import shutil
from bs4 import BeautifulSoup
import sys

def get_immediate_subdirectories(a_dir):
    return [name for name in os.listdir(a_dir)
            if os.path.isdir(os.path.join(a_dir, name))]

def getNextNo(archiveFolder):
  try:
    fileList = [f for f in listdir(archiveFolder) if isfile(join(archiveFolder, f))]
  except:
    return [1,'']
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

def copySrcIfDifferent(fromDir, toDir, nextNoVue, logFile):
  vuePrefix = str(nextNoVue).zfill(3)+' '+sys.argv[1]+' - '
  isDifferent = False
  files = [] #files in the current project directory
  for filename in listdir(fromDir):
    if filename.endswith('.vue') or filename.endswith('.js'):
      files.append(filename)

  highestFiles = []
  for filename in listdir(toDir):
    if filename.startswith(str(nextNoVue-1).zfill(3)):
      highestFiles.append(filename)

  if len(highestFiles) != len(files):
    isDifferent = True
  else:
    for filename in highestFiles:
      for filename2 in files:
        if filename.endswith(filename2):
          if not filecmp.cmp(toDir + filename, fromDir+filename2):
            isDifferent = True
            break

  if isDifferent:
    for filename in files:
      vueTarget = fromDir + filename
      newFile = toDir + vuePrefix + filename
      shutil.copy2(vueTarget, newFile)
      log.write('\n'+ time.strftime("%I:%M %p %Y/%m/%d") + '\t\t' + vuePrefix + filename)
    print 'Flushed vue index: ' + str(nextNoVue) + ' to ' + toDir

log = open('log.txt', 'a')   # open for writing - append mode
filefrom = 'blankslate.html' # this is assumed in same dir as flush
htmlTarget = '../index.html'
projDir = '../proj/'
htmlArchive = 'html/'

nextNoHtml, highestFileNameHtml = getNextNo(htmlArchive)
newFilenameFromPythonArgHtml = str(nextNoHtml).zfill(3)+' - '+sys.argv[1]+'.html'

if not filecmp.cmp(htmlArchive+highestFileNameHtml, htmlTarget):
  shutil.copy2(htmlTarget, htmlArchive+newFilenameFromPythonArgHtml)
  #shutil.copy2(filefrom, htmlTarget) #(optional, reset index.html)
  log.write('\n'+ time.strftime("%I:%M %p %Y/%m/%d") + '\t\t' + newFilenameFromPythonArgHtml)
  print 'Flushed html index: ' + str(nextNoHtml)

#check all proj/ subdirs and copy src/*.vue and src/*.js if there's been changes
for sub in get_immediate_subdirectories(projDir):
  if not os.path.exists(sub):
    os.makedirs(sub)
  nextNoVue, highestFileNameVue = getNextNo(sub)
  copySrcIfDifferent(projDir+sub+'/src/', sub+'/', nextNoVue, log )

log.close()
 