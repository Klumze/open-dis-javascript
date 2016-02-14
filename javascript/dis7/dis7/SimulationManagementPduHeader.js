/**
 * First part of a simulation management (SIMAN) PDU and SIMAN-Reliability (SIMAN-R) PDU. Sectionn 6.2.81
 *
 * Copyright (c) 2008-2015, MOVES Institute, Naval Postgraduate School. All rights reserved.
 * This work is licensed under the BSD open source license, available at https://www.movesinstitute.org/licenses/bsd.html
 *
 * @author DMcG
 */
// On the client side, support for a  namespace.
if (typeof dis7 === "undefined")
 dis7 = {};


// Support for node.js style modules. Ignored if used in a client context.
// See http://howtonode.org/creating-custom-modules
if (typeof exports === "undefined")
 exports = {};


dis7.SimulationManagementPduHeader = function()
{
   /** Conventional PDU header */
   this.pduHeader = new dis7.PduHeader(); 

   /** IDs the simulation or entity, etiehr a simulation or an entity. Either 6.2.80 or 6.2.28 */
   this.originatingID = new dis7.SimulationIdentifier(); 

   /** simulation, all simulations, a special ID, or an entity. See 5.6.5 and 5.12.4 */
   this.receivingID = new dis7.SimulationIdentifier(); 

  dis7.SimulationManagementPduHeader.prototype.initFromBinary = function(inputStream)
  {
       this.pduHeader.initFromBinary(inputStream);
       this.originatingID.initFromBinary(inputStream);
       this.receivingID.initFromBinary(inputStream);
  };

  dis7.SimulationManagementPduHeader.prototype.encodeToBinary = function(outputStream)
  {
       this.pduHeader.encodeToBinary(outputStream);
       this.originatingID.encodeToBinary(outputStream);
       this.receivingID.encodeToBinary(outputStream);
  };
}; // end of class

 // node.js module support
exports.SimulationManagementPduHeader = dis7.SimulationManagementPduHeader;

// End of SimulationManagementPduHeader class

