function definition(id, topic, term, definition){
  this.id = id;
  this.topic = topic;
  this.term = term;
  this.definition = definition;
}
var defs = [];


function loadDefinitions()
{
defs.push(new definition(0,"Mechanics and Materials","Acceleration","The rate of change of velocity"));
defs.push(new definition(1,"Mechanics and Materials","Thinking distance ","The distance travelled between the moment you first see a reason to stop and applying the brake "));
defs.push(new definition(2,"Mechanics and Materials","Braking distance ","The distance travelled from the time the brake is applied until the vehicle stops "));
defs.push(new definition(3,"Mechanics and Materials","The moment of a force ","force x perpendicular distance to the pivot "));
defs.push(new definition(4,"Mechanics and Materials","Principle of moments ","For a body in equilibrium, the sum of  clockwise moments at a point is equal to the sum of anti-clockwise moments about the same point "));
defs.push(new definition(5,"Mechanics and Materials","Couple","A pair of equal and parallel forces that are opposite and along different lines (separated by a perpendicular distance)"));
defs.push(new definition(6,"Mechanics and Materials","Torque","Force x perpendicular separation between a couple"));
defs.push(new definition(7,"Mechanics and Materials","Density","Mass per unit volume "));
defs.push(new definition(8,"Mechanics and Materials","Pressure","The normal(perpendicular) force exerted per unit cross sectional area "));
defs.push(new definition(9,"Mechanics and Materials","Velocity","The rate of change of displacement"));
defs.push(new definition(10,"Mechanics and Materials","Archimedes’ principle ","The up thrust exerted on a body immersed in a fluid is equal to the weight of the fluid that the body displaces"));
defs.push(new definition(11,"Mechanics and Materials","Work done","Force x distance moved in the direction of the force "));
defs.push(new definition(12,"Mechanics and Materials","Conservation of energy ","Total energy of a closed system remains constant, energy can not be created nor destroyed, only transferred from one form to another "));
defs.push(new definition(13,"Mechanics and Materials","Power","The rate of doing work"));
defs.push(new definition(14,"Mechanics and Materials","Watt","A Joule per second"));
defs.push(new definition(15,"Mechanics and Materials","Elastic deformation ","When the force is removed, the material returns to its original shape "));
defs.push(new definition(16,"Mechanics and Materials","Plastic deformation ","When the force is removed, the material doesn’t return to its original shape as it undergoes permanent structural changes "));
defs.push(new definition(17,"Mechanics and Materials","Hooke's Law","The extension of a material is directly proportional to the force applied before reaching the elastic limit"));
defs.push(new definition(18,"Mechanics and Materials","Tensile stress ","Force applied per unit cross sectional area of a wire (unit of pressure)"));
defs.push(new definition(19,"Mechanics and Materials","Tensile strain ","The fractional change in the original length of the wire (percentage change)"));
defs.push(new definition(20,"Mechanics and Materials","Newton's first law","An object will remain at rest or constant velocity unless acted upon by a resultant force "));
defs.push(new definition(21,"Mechanics and Materials","Newton's second law","The net force acting on an object is directly proportional to the rate of change of its momentum along the same line of action."));
defs.push(new definition(22,"Mechanics and Materials","Newton's third law","If body A exerts a force on body B, body B will exert a force on body A that is equal, opposite and of the same type"));
defs.push(new definition(23,"Mechanics and Materials","Conservation of momentum ","For a closed system of interacting objects, the total momentum in a specific direction remains constant, as long as no external forces act on the system"));
defs.push(new definition(24,"Mechanics and Materials","Impulse","The product of force and the time for which this force acts on an object"));
defs.push(new definition(25,"Electricity","Current","The rate of flow of charge"));
defs.push(new definition(26,"Electricity","Conservation of charge ","Electric charge can neither be created, nor destroyed "));
defs.push(new definition(27,"Electricity","Kirchhoff's first law","The sum of current entering a junction is equal to the sum of current leaving a junction"));
defs.push(new definition(28,"Electricity","Kirchhoff's second law","The sum of all voltages around any closed loop in a circuit must equal zero"));
defs.push(new definition(29,"Electricity","Voltage","One Joule per Coulomb"));
defs.push(new definition(30,"Electricity","Potential difference","One Joule per Coulomb transferred from electrical energy to any other form"));
defs.push(new definition(31,"Electricity","Electromotive force (emf)","One Joule per Coulomb transferred from any form of energy to electrical"));
defs.push(new definition(32,"Electricity","The Ohm","A volt per Ampare"));
defs.push(new definition(33,"Electricity","Ohm's law","for a metallic conductor kept at a constant temperature, the current is directly proportional to the p.d applied"));
defs.push(new definition(34,"Electricity","The kilowatt hour ","The energy transferred by a device with a power of 1kW operating for a time of 1 hour "));
defs.push(new definition(35,"Waves and Quantum","Progressive wave","A wave that transfers energy from one place to another, without transferring any matter "));
defs.push(new definition(36,"Waves and Quantum","Amplitude","The maximum displacement from the equilibrium position "));
defs.push(new definition(37,"Waves and Quantum","Time period","Time taken for one complete oscillation "));
defs.push(new definition(38,"Waves and Quantum","Frequency","The number of oscillations/cycles per second"));
defs.push(new definition(39,"Waves and Quantum","The law of plane reflection","The angle of incidence of a wave is equal to the angle of reflection "));
defs.push(new definition(40,"Waves and Quantum","Intensity","The power of a wave incident perpendicular to a surface per unit area "));
defs.push(new definition(41,"Waves and Quantum","Principle of superposition ","When two waves meet at a point, the resultant displacement at that point is equal to the sum of the displacements of the individual waves"));
defs.push(new definition(42,"Waves and Quantum","Stationary/standing wave","The superposition occuring when a wave reflects onto itself causing harmonic patterns"));
defs.push(new definition(43,"Waves and Quantum","The electronVolt","The energy gained by the charge of a single electron moved through an electric potential difference of one volt."));
defs.push(new definition(44,"Thermal, SHM and Gravitational Fields","Internal energy ","The sum of the randomly distributed kinetic and potential energies of atoms or molecules within a substance "));
defs.push(new definition(45,"Thermal, SHM and Gravitational Fields","Specific heat capacity ","The energy required per unit mass to change the temperature of that mass by 1K"));
defs.push(new definition(46,"Thermal, SHM and Gravitational Fields","Specific latent heat ","The energy required to change the state of a substance per unit mass while at constant temperature "));
defs.push(new definition(47,"Thermal, SHM and Gravitational Fields","Boyle’s Law ","When the temperature of a gas is kept constant, the pressure and volume of the gas are inversely proportional "));
defs.push(new definition(48,"Thermal, SHM and Gravitational Fields","Charle’s Law ","When the pressure of a gass is kept constant, the volume of the gas is directly proportional to the temperature "));
defs.push(new definition(49,"Thermal, SHM and Gravitational Fields","Gay Lussac’s Law ","When the volume of a gas is kept constant, the pressure of the gas is directly proportional to its absolute temperature "));
defs.push(new definition(50,"Thermal, SHM and Gravitational Fields","Angular velocity","The rate of change of angle in radians"));
defs.push(new definition(51,"Thermal, SHM and Gravitational Fields","Centripetal force","The resultant force directed towards the centre of a circle and at 90 degrees to the direction of motion."));
defs.push(new definition(52,"Thermal, SHM and Gravitational Fields","Centripetal acceleration","Acceleration directed at 90 degrees to the direction of motion causing a circular path"));
defs.push(new definition(53,"Thermal, SHM and Gravitational Fields","Simple harmonic motion","Oscillation where acceleration is directly proptortional to displacement in the opposite direction"));
defs.push(new definition(54,"Thermal, SHM and Gravitational Fields","Resonance","The result of a driving frequency being equal to the natural frequency of an object"));
defs.push(new definition(55,"Thermal, SHM and Gravitational Fields","Gravitational field strength","The force per unit mass acting on an object in a gravitational field"));
defs.push(new definition(56,"Thermal, SHM and Gravitational Fields","Newton's law of gravitation","The force between two point masses is directly proportional to the product of the masses and inversely proportional to the square of the separation distance"));
defs.push(new definition(57,"Thermal, SHM and Gravitational Fields","Kepler's first law","The orbit of a planet is an elipse with Sun at the center of one foci"));
defs.push(new definition(58,"Thermal, SHM and Gravitational Fields","Kepler's second law","A line segent joining a planet and the Sun sweeps out equal areas during equal time frames"));
defs.push(new definition(59,"Thermal, SHM and Gravitational Fields","Kepler's third law","The square of the orbital period of a planet is directly proportional to its average distance from the Sun cubed"));
defs.push(new definition(60,"Thermal, SHM and Gravitational Fields","Gravitational potential","The work done per unit mass to bring an object to a point in space from infinity"));
defs.push(new definition(61,"Cosmology, Electric Fields and Medical Imaging","Electron degeneracy pressure","A outward pressure on a collapsing star as a result of the Pauli exclusion principle"));
defs.push(new definition(62,"Cosmology, Electric Fields and Medical Imaging","Cosmological principle","The universe is homogenous and isotropic in all directions"));
defs.push(new definition(63,"Cosmology, Electric Fields and Medical Imaging","Hubble's law","The recessional speed of a galaxy is directly proportional to its distance from the Earth"));
defs.push(new definition(64,"Cosmology, Electric Fields and Medical Imaging","Capacitcance","Charge stored per unit potential difference"));
defs.push(new definition(65,"Cosmology, Electric Fields and Medical Imaging","Time constant","The time taken for a capacitor to discharge to 37% its initial value"));
defs.push(new definition(66,"Cosmology, Electric Fields and Medical Imaging","Electric field strength","Force experienced per unit posistive charge"));
defs.push(new definition(67,"Cosmology, Electric Fields and Medical Imaging","Coulomb's law","The force between two point charges is equal to the product of of the charges and inversely proportional to the square of the separation between them"));
defs.push(new definition(68,"Cosmology, Electric Fields and Medical Imaging","Electric potential","Work done per unit charge when bringing a positive charge to a point from infinity"));
defs.push(new definition(69,"Cosmology, Electric Fields and Medical Imaging","Magnetic flux","The product of magnetic flux density and cross sectional area perpendicular to the magnetic field"));
defs.push(new definition(70,"Cosmology, Electric Fields and Medical Imaging","Magnetic flux density","Weber per meter squared"));
defs.push(new definition(71,"Cosmology, Electric Fields and Medical Imaging","Magnetic flux linkage","The product of magnetic flux and the number of turns"));
defs.push(new definition(72,"Cosmology, Electric Fields and Medical Imaging","Faraday's law","Electromotive force is directly proportional to the rate of change of magnetic flux"));
defs.push(new definition(73,"Cosmology, Electric Fields and Medical Imaging","Lenz's law","Induced electric current flows in a direction opposite to the field that created it"));
defs.push(new definition(74,"Cosmology, Electric Fields and Medical Imaging","Hadron","A particle made of 3 quarks and can be affected by the strong nuclear force"));
defs.push(new definition(75,"Cosmology, Electric Fields and Medical Imaging","Lepton","Sub atomic particles that arent affected by the strong nuclear force"));
defs.push(new definition(76,"Cosmology, Electric Fields and Medical Imaging","Half life","The average time taken for half the number of nuclei in a sample to decay"));
defs.push(new definition(77,"Cosmology, Electric Fields and Medical Imaging","Binding energy","The minimum energy required to separate a nucleus into its constituent parts"));
defs.push(new definition(78,"Cosmology, Electric Fields and Medical Imaging","Fission","The splitting of a large nucleus into daughter nuclei causing the release of energy"));
defs.push(new definition(79,"Cosmology, Electric Fields and Medical Imaging","Fusion","The joining of two light nuclei releasing energy"));
defs.push(new definition(80,"Cosmology, Electric Fields and Medical Imaging","Acoustic impedance","The product of density and the speed of sound in a selected material"));

  console.log("Definitions loaded to app")
}



//script
loadDefinitions();
