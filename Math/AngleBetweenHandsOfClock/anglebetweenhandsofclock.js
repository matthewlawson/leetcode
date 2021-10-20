/**
 * @param {number} hour
 * @param {number} minutes
 * @return {number}
 */
// 1:57 - 76
 export var angleClock = function(hour, minutes) {
    const degreesPerMinute = 360 / 60; // 6
    const degreesPerHour = 360 / 12; // 30

    const minuteHand = minutes * degreesPerMinute; // 342
    // Mod 360 to handle case of hour 12.
    const hourHand = ((hour * degreesPerHour) % 360) + ((minutes / 60) * degreesPerHour);
    // return Math.abs(hourHand - minuteHand);
    const diff = Math.max(minuteHand, hourHand) - Math.min(minuteHand, hourHand);
    return Math.min(diff, 360 - diff);
};
