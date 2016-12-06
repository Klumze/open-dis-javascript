A Javascript implemtation of DIS that decodes IEEE 1278.1
binary data format messages and turns them into Javascript
objects.

This library is intended to be used on the client side with
the websocket receiving data. The web socket hands off an
event message with binary data attached, and the javascript
library decodes it and turns it into a javascript object.

The code also includes some simple coordinate system transforms
to change DIS world coordinates to (lat, lon, alt) or to a
position in a local tanget plane coordinate system. 

This uses a git submodule to pull in XML description files for
the messages sent in the protocol. To make the present, run

git submodule init
git submodule update

This will check out the XML files to DISDescription/

DMcG
