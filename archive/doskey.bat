REM Usage: vf "Commit message" -> flushes, adds, commits with first param as message (delimited with double quotes)
REM regedit HKEY_CURRENT_USER/Software/Microsoft/Command Processor/AutoRun(string) [dir]\doskey.bat
REM SET gdir=F:\git
doskey vf=F: $T cd F:\Dropbox\projects\vue\archive $T python flush.py $T cd F:\Dropbox\projects\vue $T git add . $T git commit -m "$*" $T git push
