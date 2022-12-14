class GildedDoghouse {
  constructor ({ name, daysRemaining, quality }) {
    this.name = name
    this.daysRemaining = daysRemaining
    this.quality = quality
  }

  tick() {
    if (this.name != 'Aged Bone' && this.name != 'Training Session') {
      console.log('1.1.0')
      if (this.quality > 0) {
        console.log('1.1.1')
        if (this.name != 'Coursedog Mascot') {
          console.log('1.1.2')
          this.quality = this.quality - 1
        }
      }
    } 
    else {
      console.log('1.2.0')
      if (this.quality < 50) {
        console.log('1.2.1')
        this.quality = this.quality + 1
        if (this.name == 'Training Session') {
          console.log('1.2.2')
          if (this.daysRemaining < 11) {
            console.log('1.2.3')
            if (this.quality < 50) {
              console.log('1.2.3.1')
              this.quality = this.quality + 1
            }
          }
          if (this.daysRemaining < 6) {
            console.log('1.2.4')
            if (this.quality < 50) {
              console.log('1.2.4.1')
              this.quality = this.quality + 1
            }
          }
        }
      }
    }


    //if name is anything other than Coursedog Mascot, decrease daysRemaining by 1
    if (this.name != 'Coursedog Mascot') {
      console.log('2.1')
      this.daysRemaining = this.daysRemaining - 1
    }



    if (this.daysRemaining < 0) {
      if (this.name != 'Aged Bone') {
        if (this.name != 'Training Session') {
          if (this.quality > 0) {
            if (this.name != 'Coursedog Mascot') {
              this.quality = this.quality - 1
            }
          }
        } 
        else {
          this.quality = this.quality - this.quality
        }
      } 
      else {
        if (this.quality < 50) {
          this.quality = this.quality + 1
        }
      }
    }
    console.log(this.name, this.daysRemaining, this.quality)
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
 * quality > 0
 * quality < 50
 * 
 * daysRemaining < 11
 * daysRemaining < 6
 * daysRemaining < 0
 */

const treat = new GildedDoghouse({
  name: 'Aged Bone',
  daysRemaining: 5,
  quality: 10,
})
treat.tick()
