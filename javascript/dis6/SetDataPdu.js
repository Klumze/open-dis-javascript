/**
 * Section 5.3.6.9. Change state information with the data contained in this. COMPLETE
 *
 * Copyright (c) 2008-2015, MOVES Institute, Naval Postgraduate School. All rights reserved.
 * This work is licensed under the BSD open source license, available at https://www.movesinstitute.org/licenses/bsd.html
 *
 * @author DMcG
 */
// On the client side, support for a  namespace.
if (typeof null === "undefined")
 null = {};


// Support for node.js style modules. Ignored if used in a client context.
// See http://howtonode.org/creating-custom-modules
if (typeof exports === "undefined")
 exports = {};


null.SetDataPdu = function()
{
   /** The version of the protocol. 5=DIS-1995, 6=DIS-1998. */
   this.protocolVersion = 6;

   /** Exercise ID */
   this.exerciseID = 0;

   /** Type of pdu, unique for each PDU class */
   this.pduType = 19;

   /** value that refers to the protocol family, eg SimulationManagement, et */
   this.protocolFamily = 5;

   /** Timestamp value */
   this.timestamp = 0;

   /** Length, in bytes, of the PDU. Changed name from length to avoid use of Hibernate QL reserved word */
   this.pduLength = 0;

   /** zero-filled array of padding */
   this.padding = 0;

   /** Entity that is sending message */
   this.originatingEntityID = new null.EntityID(); 

   /** Entity that is intended to receive message */
   this.receivingEntityID = new null.EntityID(); 

   /** ID of request */
   this.requestID = 0;

   /** padding */
   this.padding1 = 0;

   /** Number of fixed datum records */
   this.numberOfFixedDatumRecords = 0;

   /** Number of variable datum records */
   this.numberOfVariableDatumRecords = 0;

   /** variable length list of fixed datums */
    this.fixedDatums = new Array();
 
   /** variable length list of variable length datums */
    this.variableDatums = new Array();
 
  null.SetDataPdu.prototype.initFromBinary = function(inputStream)
  {
       this.protocolVersion = inputStream.readUByte();
       this.exerciseID = inputStream.readUByte();
       this.pduType = inputStream.readUByte();
       this.protocolFamily = inputStream.readUByte();
       this.timestamp = inputStream.readUInt();
       this.pduLength = inputStream.readUShort();
       this.padding = inputStream.readShort();
       this.originatingEntityID.initFromBinary(inputStream);
       this.receivingEntityID.initFromBinary(inputStream);
       this.requestID = inputStream.readUInt();
       this.padding1 = inputStream.readUInt();
       this.numberOfFixedDatumRecords = inputStream.readUInt();
       this.numberOfVariableDatumRecords = inputStream.readUInt();
       for(var idx = 0; idx < this.numberOfFixedDatumRecords; idx++)
       {
           var anX = new null.UnsignedIntegerWrapper();
           anX.initFromBinary(inputStream);
           this.fixedDatums.push(anX);
       }

       for(var idx = 0; idx < this.numberOfVariableDatumRecords; idx++)
       {
           var anX = new null.UnsignedIntegerWrapper();
           anX.initFromBinary(inputStream);
           this.variableDatums.push(anX);
       }

  };

  null.SetDataPdu.prototype.encodeToBinary = function(outputStream)
  {
       outputStream.writeUByte(this.protocolVersion);
       outputStream.writeUByte(this.exerciseID);
       outputStream.writeUByte(this.pduType);
       outputStream.writeUByte(this.protocolFamily);
       outputStream.writeUInt(this.timestamp);
       outputStream.writeUShort(this.pduLength);
       outputStream.writeShort(this.padding);
       this.originatingEntityID.encodeToBinary(outputStream);
       this.receivingEntityID.encodeToBinary(outputStream);
       outputStream.writeUInt(this.requestID);
       outputStream.writeUInt(this.padding1);
       outputStream.writeUInt(this.numberOfFixedDatumRecords);
       outputStream.writeUInt(this.numberOfVariableDatumRecords);
       for(var idx = 0; idx < this.fixedDatums.length; idx++)
       {
           fixedDatums[idx].encodeToBinary(outputStream);
       }

       for(var idx = 0; idx < this.variableDatums.length; idx++)
       {
           variableDatums[idx].encodeToBinary(outputStream);
       }

  };
}; // end of class

 // node.js module support
exports.SetDataPdu = null.SetDataPdu;

// End of SetDataPdu class

