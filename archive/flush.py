import re
import filecmp
from os import listdir
from os.path import isfile, join
import time
import shutil
from bs4 import BeautifulSoup

log = open('log.txt', 'a')   # open for writing - append mode
filefrom = 'blankslate.html' # this is assumed in same dir as flush
fileto   = '../index.html'
archive  = 'html/'
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

title = ''
soup = BeautifulSoup(open(fileto), "html.parser")
title = soup.title.string
newFilename = str(nextno).zfill(3)+' - '+title+'.html'

if filecmp.cmp(archive+highestFileName, fileto):
  shutil.copy2(fileto, archive+newFilename)
  #shutil.copy2(filefrom, fileto) #(optional, reset index.html)
  log.write('\n'+ time.strftime("%I:%M %p %Y/%m/%d") + '\t\t' + newFilename)
  print 'Flushed index: ' + str(nextno)

log.close()

