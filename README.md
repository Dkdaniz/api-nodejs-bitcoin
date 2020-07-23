# install

```bash
wget https://bitcoin.org/bin/bitcoin-core-0.20.0/bitcoin-0.20.0-x86_64-linux-gnu.tar.gz -O bitcoin-0.20.0-x86_64-linux-gnu.tar.gz
wget https://bitcoin.org/bin/bitcoin-core-0.20.0/SHA256SUMS.asc -O SHA256SUMS.asc
wget https://bitcoin.org/laanwj-releases.asc -O laanwj-releases.asc

/usr/bin/gpg --import laanwj-releases.asc
/usr/bin/gpg --verify SHA256SUMS.asc

/usr/bin/sha256sum bitcoin-0.20.0-x86_64-linux-gnu.tar.gz | awk '{print $1}'
cat SHA256SUMS.asc | grep bitcoin-0.20.0-x86_64-linux-gnu.tar.gz | awk '{print $1}'

/bin/tar xzf bitcoin-0.20.0-x86_64-linux-gnu.tar.gz -C

sudo /usr/bin/install -m 0755 -o root -g root -t /usr/local/bin bitcoin-0.20.0/bin/*

```
