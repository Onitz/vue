REM vf used for flushing a file & commiting with first param as message
REM Commit Message must be delimited with double quotes, $T splits commands
REM Usage: vf "Commit message" -> flushes, adds, commits
doskey vf=F: $T cd F:\Dropbox\projects\vue\archive $T python flush.py $T cd F:\Dropbox\projects\vue $T git add . $T git commit -m $1 $T git push