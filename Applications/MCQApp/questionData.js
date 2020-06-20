var qArray = []; // Array to store question objects
initialiseQuestionArray();

function Question(iD, answer, topic, paper, year, keyWords, level) {
  this.iD = iD;
  this.answer = answer;
  this.topic = topic;
  this.paper = paper;
  this.year = year;
  this.keyWords = keyWords;
  this.level = level;

  function getTopic()
  {
    return this.topic;
  }

}

function initialiseQuestionArray()
{
  qArray.push(new Question(0,"c","workEnergyPower","H156/01","2016","power watt units quantities","as"));
  qArray.push(new Question(1,"b","workEnergyPower","H156/01","2016","power watt units quantities","as"));
  qArray.push(new Question(2,"c","waves","H156/01","2016","polarising intensity malus","as"));
  qArray.push(new Question(3,"d","quantum","H156/01","2016","diffraction electrons","as"));
  qArray.push(new Question(4,"b","waves","H156/01","2016","electromagnetic wavelength","as"));
  qArray.push(new Question(5,"a","forcesAndMotion","H156/01","2016","acceleration graph force momentum","as"));
  qArray.push(new Question(6,"b","forcesAndMotion","H156/01","2016","triangle forces friction ramp","as"));
  qArray.push(new Question(7,"b","materialsSprings","H156/01","2016","spring elastic ratio springs ratios","as"));
  qArray.push(new Question(8,"a","electricity","H156/01","2016","potential divider circuit circuits","as"));
  qArray.push(new Question(9,"c","newtonsLawsMomentum","H156/01","2016","conservation momentum kinetic","as"));
  qArray.push(new Question(10,"d","electricity","H156/01","2016","current conventional emf","as"));
  qArray.push(new Question(11,"b","electricity","H156/01","2016","current kirchhoff kirchhoffs kirchhoff's","as"));
  qArray.push(new Question(12,"c","electricity","H156/01","2016","uncertainty","as"));
  qArray.push(new Question(13,"c","forcesAndMotion","H156/01","2016","acceleration graph bounce velocity","as"));
  qArray.push(new Question(14,"c","quantum","H156/01","2016","electron gun ratio ratios ratio's","as"));
  qArray.push(new Question(15,"a","quantum","H156/01","2016","photon photons photoelectric","as"));
  qArray.push(new Question(16,"d","materialsSprings","H156/01","2016","potential elastic ratio springs ratios guitar youngs","as"));
  qArray.push(new Question(17,"c","forcesAndMotion","H156/01","2016","projectile kinetic energy","as"));
  qArray.push(new Question(18,"d","electricity","H156/01","2016","power ratio ratio's ratio resitor parallel","as"));
  qArray.push(new Question(19,"b","waves","H156/01","2016","refraction","as"));
  qArray.push(new Question(20,"a","waves","H556/01","2015","frequency units","a2"));
  qArray.push(new Question(21,"d","materialsSprings","H556/01","2015","uncertainty units","a2"));
  qArray.push(new Question(22,"c","forcesAndMotion","H556/01","2015","suvat","a2"));
  qArray.push(new Question(23,"c","workEnergyPower","H556/01","2015","power resolving","a2"));
  qArray.push(new Question(24,"b","materialsSprings","H556/01","2015","young modulus elastic","a2"));
  qArray.push(new Question(25,"a","newtonsLawsMomentum","H556/01","2015","upthrust archemedis acceleration","a2"));
  qArray.push(new Question(26,"c","materialsSprings","H556/01","2015","upthrust archemedis acceleration","a2"));
  qArray.push(new Question(27,"a","newtonsLawsMomentum","H556/01","2015","momentum 2d","a2"));
  qArray.push(new Question(28,"b","shmCircular","H556/01","2015","shm","a2"));
  qArray.push(new Question(29,"thermalPhysics","H556/01","2015","latent heat","a2",""));
  qArray.push(new Question(30,"b","gravitationalFields","H556/01","2015","ratio ratios gravitational potential","a2"));
  qArray.push(new Question(31,"thermalPhysics","H556/01","2015","gas laws","a2",""));
  qArray.push(new Question(32,"b","gravitationalFields","H556/01","2015","ratio ratios weight","a2"));
  qArray.push(new Question(33,"b","shmCircular","H556/01","2015","angular velocity","a2"));
  qArray.push(new Question(34,"b","shmCircular","H556/01","2015","angular velocity","a2"));
  qArray.push(new Question(35,"d","quantum","H556/01","2015","nuclear quantum broglie","a2"));
  console.log("completed question object upload");
}

function resetQuestionArray()
{
  qArray=[];
  initialiseQuestionArray();
}
