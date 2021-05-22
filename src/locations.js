const locations = [
  {
    id: 1,
    name: "Earth (C-137)",
    type: "Planet",
    dimension: "Dimension C-137",
    description: "Are you a cronenberg and feel like an outcast everywhere you go?  Well, look no further than here!  Earth: Dimension C-137!  Here, by a happy accident, everyone was turned into cronenbergs by mad scientist Rick Sanchez.  Feel right at home here where you'll be surrounded by fellow cronenbergs!  Contact the agent today to view this planet!",
    cost: "$0/year",
    neighborhood: "OK",
    images: [
      "earth_c_137.jpeg",
      "earth_c_137_family.png"
    ],
    reviews: [
      "I'm a cronenberg, and I loved it!  Very nice neighborhoods all around the planet.  Made me feel safe and secure.  Definitely making this place my home!",
      "Definitely not a place for non-cronenbergs!  I nearly died on that planet!"
    ],
    agent: {
      id: 82,
      name: "Cronenberg Rick",
      image: "cronenberg_rick.jpeg"
    }
  },
  {
    id: 3,
    name: "Citadel of Ricks",
    type: "Space station",
    dimension: "unknown",
    description: "Are you a Rick or Morty trying to find your place in this crazy universe?  Well, come on down to The Citadel!  Here, no Rick or Morty will be left behind.  Here, every Rick and Morty has value and a purpose.  And with the new leadership of President Morty, life is even better!  Crime is down, jobs are up, and reconstruction is in full swing.  The Citadel has never looked better!  Come make this place your home!",
    cost: "$60,000/year",
    neighborhood: "Safe",
    images: [
      "citadel_of_ricks.png",
      "citadel_of_ricks_ricks.png",
      "citadel_of_ricks_ricks_and_mortys.jpeg",
      "citadel_of_ricks_president_morty.png",
      "citadel_of_ricks_morty_takeover.jpeg"
    ],
    reviews: [
      "President Morty is the best, bro!  He personally greeted me on my visit to the Citadel and offered me a good-paying job if I moved there!  Totally doing it now!",
      "Well, President Morty might not be my flask of liquor, but damn it I'm impressed by this place.  It's really been cleaned up.  I'm seriously thinking of moving here now."
    ],
    agent: {
      id: 103,
      name: "Doofus Rick",
      image: "doofus_rick.jpeg"
    }
  },
  {
    id: 4,
    name: "Worldender's Lair",
    type: "Planet",
    dimension: "unknown",
    description: "Do you love the idea of spending the rest of your life in a creepy, Hell-like lair?  Looking for a place full of peace and quiet?  Visit Worldender's Lair today!  Worldender and his minions are long dead, so you have their lair all to yourself!  Contact the agent today!",
    cost: "$10,000/year",
    neighborhood: "Safe",
    images: [
      "worldenders_lair.png",
      "worldenders_lair_worldender_dead.jpeg"
    ],
    reviews: [
      "Dead, rotting bodies still litter the ground, but I'm a Satanist, so that don't bother me none!  I love the stench of death.",
      "Totally unlivable.  No way in hell I'm ever living there!  Don't waste your time!"
    ],
    agent: {
      id: 340,
      name: "Supernova",
      image: "supernova.jpeg"
    }
  },
  {
    id: 5,
    name: "Anatomy Park",
    type: "Microverse",
    dimension: "Dimension C-137",
    description: "Have you ever wanted to live in another person's body???  Well, now you can!  Anatomy Park, located inside young teenager, Ethan, is definitely a rival to Disneyland.  It features living, microscopic organisms as some of its attractions, as well as thrilling rides.  Make Anatomy Park your home today!  Units are being built just outside the park.  It's an exciting time to be inside Ethan!  Contact the agent today!",
    cost: "$5,000/year",
    neighborhood: "OK",
    images: [
      "Anatomy_Park.png",
      "Anatomy_Park_spleen_mountain.jpeg",
      "Anatomy_Park_river.jpeg",
      "Anatomy_Park_pirates_of_the_pancreas.jpeg",
      "Anatomy_Park_its_a_small_small_intestine.jpeg",
      "Anatomy_Park_food_court.png",
      "Anatomy_Park_bladder_falls.png"
    ],
    reviews: [
      "Way better than Disneyland!  Definitely won't get tired of Anatomy Park!  Keep me here forever!  I'm in!",
      "Most of Ethan is pretty cool, except for the colon.  Don't stay there.  It stinks so bad there.  And don't wander off too far from the park, Gonorrhea and Hepatitis B are constantly on the prowl and will eat you up in an instant if you're not careful!"
    ],
    agent: {
      id: 17,
      name: "Annie",
      image: "annie.jpeg"
    }
  },
  {
    id: 6,
    name: "Interdimensional Cable",
    type: "TV",
    dimension: "unknown",
    description: "Ever fantasize about living inside of a TV?  Well, fantasy has become reality!  Live inside the world of Interdimensional Cable today!  Travel across dimensions and say hello to your favorite Interdimensional Cable stars like Ants In My Eyes Johnson, Glenn, Gazorpazorpfield, Ball Fondlers, and many more!  Contact the agent today!",
    cost: "50,000 Brapples/year ($25,000/year)",
    neighborhood: "OK",
    images: [
      "interdimensional_cable_ants_in_my_eyes_johnson.png",
      "interdimensional_cable_ball_fondlers.png",
      "interdimensional_cable_corn_people.png",
      "interdimensional_cable_gazorpazorpfield.jpeg",
      "interdimensional_cable_glenn.jpeg",
      "interdimensional_cable_jan_michael_vincents.jpg",
      "interdimensional_cable_lil_bits.png",
      "interdimensional_cable_opposite_got.jpeg",
      "interdimensional_cable_real_fake_doors.jpeg",
      "interdimensional_cable_stealy.jpeg",
      "interdimensional_cable_Strawberry_Smiggles.jpeg",
      "interdimensional_cable_two_brothers.png",
      "interdimensional_cable_unmuscular_michaels.png",
    ],
    reviews: [
      "Ball Fondlers were awesome!  Got to meet them and join them on a couple adventures.  I'm definitely spending the rest of my life here!",
      "I was being shown around by Ants In My Eyes Johnson, but because he can't see or feel anything, Stealy started robbing him of all his clothes, then he took me and robbed me!  Watch out for Stealy."
    ],
    agent: {
      id: 20,
      name: "Ants In My Eyes Johnson",
      image: "ants_in_my_eyes_johnson.jpeg"
    }
  }
];

export default locations;