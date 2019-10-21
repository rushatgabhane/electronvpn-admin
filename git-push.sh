#!/bin/bash

read -r -p 'Commit message: ' msg
if [ -z "$msg" ]
then
	echo commit message not entered
else
	git add .
        git commit -m "$msg"
        git push origin master
fi
