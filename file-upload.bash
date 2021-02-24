npx files-upload-server &
ssh -R 5000:localhost:8008 -N -o ExitOnForwardFailure=yes playground &

wait


