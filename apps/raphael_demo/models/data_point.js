// ==========================================================================
// Project:   RaphaelDemo.DataPoint
// Copyright: ©2010 Richard Klancer
// ==========================================================================
/*globals RaphaelDemo */

/** @class

  (Document your Model here)

  @extends SC.Record
  @version 0.1
*/
RaphaelDemo.DataPoint = SC.Record.extend(
/** @scope RaphaelDemo.DataPoint.prototype */ {

  x: SC.Record.attr(Number),
  y: SC.Record.attr(Number),
  series: SC.Record.toOne('RaphaelDemo.DataSeries', { inverse: 'points' } )
  
}) ;
