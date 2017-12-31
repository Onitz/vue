import re
import filecmp
from os import listdir
from os.path import isfile, join
import time
import shutil
from bs4 import BeautifulSoup
import sys

log = open('log.txt', 'a')   # open for writing - append mode
filefrom = 'blankslate.html' # this is assumed in same dir as flush
fileTarget = '../proj/vue-cli/index.html' # '../index.html' for original
archive  = 'webpack-simple html' # 'html/'
fileList = [f for f in listdir(archive) if isfile(join(archive, f))]

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

#extract the title from the html file or python argument
title = ''
soup = BeautifulSoup(open(fileTarget), "html.parser")
title = soup.title.string
newFilenameFromHtmlTitle = str(nextno).zfill(3)+' - '+title+'.html'
newFilenameFromPythonArg = str(nextno).zfill(3)+' - '+sys.argv[1]+'.html'

if not filecmp.cmp(archive+highestFileName, fileTarget):
  shutil.copy2(fileTarget, archive+newFilenameFromPythonArg)
  #shutil.copy2(filefrom, fileTarget) #(optional, reset index.html)
  log.write('\n'+ time.strftime("%I:%M %p %Y/%m/%d") + '\t\t' + newFilenameFromPythonArg)
  print 'Flushed index: ' + str(nextno)

log.close()

