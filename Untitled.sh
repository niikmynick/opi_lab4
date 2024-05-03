#!/bin/bash

# run your Ant script
ant -f build.xml build

# check the exit status of the Ant script
if [ $? -ne 0 ]; then
 echo "Build failed, aborting commit"
 exit 1
fi
