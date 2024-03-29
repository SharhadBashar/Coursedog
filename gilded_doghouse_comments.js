class GildedDoghouse {
  constructor ({ name, daysRemaining, quality }) {
    this.name = name
    this.daysRemaining = daysRemaining
    this.quality = quality
  }

  tick() {
    // This block is executed and has one possible output: 
    // name => 'Normal item' OR 'Beef Cake' 
    // AND 
    // quality => quality > 0 
    // THEN 
    // reduce the quality by 1
    if (this.name != 'Aged Bone' && this.name != 'Training Session') {
      // Come here if name is 'Normal item' OR 'Coursedog Mascot' OR 'Beef Cake'
      console.log('1.1.0.0')
      if (this.quality > 0) {
        // Come here if name is 'Normal item' OR 'Coursedog Mascot' OR 'Beef Cake' AND quality > 0
        console.log('1.1.1.0')
        if (this.name != 'Coursedog Mascot') {
          // Come here if name is 'Normal item' OR 'Beef Cake' AND quality > 0 AND THEN reduce the quality by 1
          console.log('1.1.2.0')
          this.quality = this.quality - 1
        }
      }
    } 

    // This block is executed and has four possible outputs (last three are nested within one another):
    // 1.  name => 'Aged Bone'
    //     AND
    //     quality => quality < 50
    //     THEN
    //     increase quality by 1
    // 2.  name => 'Training Session'
    //     AND
    //     quality => quality < 50
    //     THEN
    //     increase quality by 1
    // 2a. name => 'Training Session'
    //     AND
    //     quality => quality < 50
    //     AND
    //     daysRemaining => daysRemaining < 11
    //     THEN
    //     increase quality by 1
    // 2b. name => 'Training Session'
    //     AND
    //     quality => quality < 50
    //     AND
    //     daysRemaining => daysRemaining < 6
    //     THEN
    //     increase quality by 1
    // Max increase in quality can be 3
    else {
      // Come here if name is 'Aged Bone' OR 'Training Session'
      console.log('1.2.0.0')
      if (this.quality < 50) {
        // Come here if name is 'Aged Bone' OR 'Training Session' AND quality < 50 AND THEN increase quality by 1 
        console.log('1.2.1.0')
        this.quality = this.quality + 1
        if (this.name == 'Training Session') {
          // Come here if name is 'Training Session' AND quality < 50
          console.log('1.2.2.0')
          if (this.daysRemaining < 11) {
            // Come here if name is 'Training Session' AND quality < 50 AND daysRemaining < 11
            console.log('1.2.2.1')
            if (this.quality < 50) {
              // Come here if name is 'Training Session' AND quality < 50 AND daysRemaining < 11 AND quality < 50 AND THEN increase quality by 1 
              console.log('1.2.2.2')
              this.quality = this.quality + 1
            }
          }
          if (this.daysRemaining < 6) {
            // Come here if name is 'Training Session' AND quality < 50 AND daysRemaining < 6
            console.log('1.2.3.1')
            if (this.quality < 50) {
              // Come here if name is 'Training Session' AND quality < 50 AND daysRemaining < 6 AND quality < 50 AND THEN increase quality by 1 
              console.log('1.2.3.2')
              this.quality = this.quality + 1
            }
          }
        }
      }
    }


    
    if (this.name != 'Coursedog Mascot') {
      // This block is executed and has one possible output: 
      // name => 'Normal item' OR 'Aged Bone' OR 'Training Session' OR 'Beef Cake' 
      // THEN 
      // decrease daysRemaining by 1
      console.log('2.0.0.0')
      this.daysRemaining = this.daysRemaining - 1
    }


    // This block is executed and has three possible outputs:
    // 1. daysRemaining => daysRemaining < 0
    //    AND
    //    name => 'Normal item' OR 'Beef Cake'
    //    AND
    //    quality => quality > 0
    //    THEN 
    //    decrease quality by 1
    // 2. daysRemaining => daysRemaining < 0
    //    AND
    //    name => 'Training Session'
    //    THEN
    //    set quality = 0
    // 3. daysRemaining => daysRemaining < 0
    //    AND
    //    name => 'Aged Bone'
    //    AND
    //    quality => quality < 50
    //    THEN 
    //    decrease quality by 1   
    if (this.daysRemaining < 0) {
      // Come here if daysRemaining < 0
      console.log('3.0.0.0')
      if (this.name != 'Aged Bone') {
        // Come here if daysRemaining < 0 AND name is 'Normal item' OR 'Coursedog Mascot' OR 'Beef Cake' OR 'Training Session'
        console.log('3.1.0.0')
        if (this.name != 'Training Session') {
          // Come here if daysRemaining < 0 AND name is 'Normal item' OR 'Coursedog Mascot' OR 'Beef Cake'
          console.log('3.1.1.0')
          if (this.quality > 0) {
            // Come here if daysRemaining < 0 AND name is 'Normal item' OR 'Coursedog Mascot' OR 'Beef Cake' AND quality > 0
            console.log('3.1.1.1')
            if (this.name != 'Coursedog Mascot') {
              // Come here if daysRemaining < 0 AND name is 'Normal item' OR 'Beef Cake' AND quality > 0 AND THEN decrease quality by 1
              console.log('3.1.1.2')
              this.quality = this.quality - 1
            }
          }
        } 
        else {
          //Come here if daysRemaining < 0 AND name is 'Training Session' AND THEN set quality to 0
          console.log('3.1.2.0')
          this.quality = this.quality - this.quality
        }
      } 
      else {
        // Come here if daysRemaining < 0 AND name is 'Aged Bone'
        console.log('3.2.0.0')
        if (this.quality < 50) {
          // Come here if daysRemaining < 0 AND name is 'Aged Bone' AND quality < 50 AND THEN increase quality by 1
          console.log('3.2.1.0')
          this.quality = this.quality + 1
        }
      }
    }

    if (this.name == 'Beef Cake') {
      // Come here if name is 'Beef Cake' AND THEN reduce quality by 1
      console.log('4.0.0.0')
      this.quality = this.quality - 1
      if (this.daysRemaining <= 0){
        // Come here if name is 'Beef Cake' AND daysRemaining <= 0 AND THEN reduce quality by 1
        console.log('4.0.0.1')
        this.quality = this.quality - 1
      }
      console.log('4.0.0.2')
      // Come here if name is 'Beef Cake' AND THEN set quality to max(quality, 0)
      this.quality = Math.max(this.quality, 0)
    }

    console.log('')
    console.log('After Tick:')
    console.log('Name:', this.name)
    console.log('Days Remaining:', this.daysRemaining)
    console.log('Quality:', this.quality)
    console.log('')
  }
}

// module.exports = GildedDoghouse
/**
 * name:
 * 'Normal item'
 * 'Aged Bone'
 * 'Coursedog Mascot'
 * 'Training Session'
 * 'Beef Cake'
 * 
 * quality:
 * quality > 0
 * quality < 50
 * 
 * daysRemaining:
 * daysRemaining < 11
 * daysRemaining < 6
 * daysRemaining < 0
 */

const name = 'Beef Cake';
const daysRemaining = 5;
const quality = 10
const treat = new GildedDoghouse({
  name: name,
  daysRemaining: daysRemaining,
  quality: quality,
})

console.log('')
console.log('Before Tick:')
console.log('Name:', name)
console.log('Days Remaining:', daysRemaining)
console.log('Quality:', quality)
console.log('')
treat.tick()
