Thermostat = function(){
  this.temperature = 20;
};


Thermostat.prototype.temperature = function () {
  return this.temperature
};

Thermostat.prototype.up = function () {
   return this.temperature += 1
};

Thermostat.prototype.down = function () {
  if (this.temperature > 10) {
    return this.temperature -= 1
  } else {
    throw new Error("It's too clod you CRAZY!!");
  };

};
