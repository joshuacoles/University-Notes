echo $$ > .fus-pid

npx files-upload-server &
ssh -R 5000:localhost:8008 -N -o ExitOnForwardFailure=yes playground &
PID=$!
trap 'kill $PID' 1 2 15

wait


