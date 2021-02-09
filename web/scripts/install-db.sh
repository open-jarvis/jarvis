#!/bin/bash

# TAKEN FROM https://github.com/jguillod/couchdb-on-raspberry-pi
wget http://packages.erlang-solutions.com/debian/erlang_solutions.asc
sudo apt-key add erlang_solutions.asc
sudo apt-get update

# install all build dependencies - note mutiple lines
sudo apt-get --no-install-recommends -y install build-essential \
pkg-config erlang libicu-dev \
libmozjs185-dev libcurl4-openssl-dev

# add couchdb user and home
COUCHDB_DIR=/home/couchdb
sudo useradd -d $COUCHDB_DIR couchdb
sudo mkdir $COUCHDB_DIR
sudo chown couchdb:couchdb $COUCHDB_DIR
sudo chmod 1777 $COUCHDB_DIR
sudo mkdir $COUCHDB_DIR/logs
sudo touch $COUCHDB_DIR/logs/stdout.log
sudo touch $COUCHDB_DIR/logs/stderr.log

# install cloudant
sudo pip3 install --upgrade cloudant

# move service file
sudo cp couchdb.service /etc/systemd/system/couchdb.service

# Get source - need URL for mirror (see post instructions, above)
wget https://mirror.klaus-uwe.me/apache/couchdb/source/3.1.1/apache-couchdb-3.1.1.tar.gz
tar zxvf apache-couchdb-3.1.1.tar.gz
cd apache-couchdb-3.1.1

# configure build and make executable(s)
./configure
make release

# copy built release to couchdb user home directory
cd ./rel/couchdb/
sudo cp -Rp * $COUCHDB_DIR
sudo chown -R couchdb:couchdb $COUCHDB_DIR
cd $COUCHDB_DIR/etc

# change access rights
sudo chmod 666 $COUCHDB_DIR/etc/local.ini

# enable couchdb service
sudo systemctl enable couchdb.service