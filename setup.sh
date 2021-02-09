#!/bin/bash


set -x


# script configuration
JARVIS_ROOT_DIR=/jarvis


# update the system
#sudo apt update
#sudo apt upgrade -y


# installing all packages
#sudo apt install -y git python3 python3-pip mosquitto
#sudo pip3 install --upgrade open-jarvis pyOpenSSL


# checking if this is a prepared raspbian image
# TODO: install rethinkdb and all the other programs when this is not a prepared image


# create the jarvis config file
sudo mkdir /etc/jarvis
sudo mv system/jarvis.conf /etc/jarvis/jarvis.conf
sudo chown -R $USER: /etc/jarvis


# create the jarvis directory
sudo mkdir -p $JARVIS_ROOT_DIR/apps
sudo mkdir -p $JARVIS_ROOT_DIR/web
sudo mkdir -p $JARVIS_ROOT_DIR/server
sudo mkdir -p $JARVIS_ROOT_DIR/setup
sudo chown -R $USER: $JARVIS_ROOT_DIR
echo $JARVIS_ROOT_DIR > /etc/jarvis/root.dir


# copy files
cp -r * $JARVIS_ROOT_DIR/setup


# move the service file to enable the jarvis installation/utils server
sudo mv system/jarvis-setupd.service /etc/systemd/system/jarvis-setupd.service
sudo systemctl daemon-reload
sudo systemctl start jarvis-setupd.service
sudo systemctl enable jarvis-setupd.service
