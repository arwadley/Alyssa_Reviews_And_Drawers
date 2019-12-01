DROP DATABASE IF EXISTS ReviewsAndDrawers; 

CREATE DATABASE IF NOT EXISTS ReviewsAndDrawers; 

USE ReviewsAndDrawers; 

CREATE TABLE items (
    id INT PRIMARY KEY, 
    box_number TEXT, 
    product_description TEXT, 
    product_size TEXT,
    care_instructions TEXT, 
    environment_and_materials TEXT, 
    package_details TEXT
); 

CREATE TABLE reviews (
    review_id INT PRIMARY KEY AUTO_INCREMENT, 
    product_id INT,
    user_name TEXT, 
    posted_date DATE, 
    review_text TEXT,
    product_value_for_money INT, 
    product_quality INT, 
    product_appearance INT, 
    product_ease_of_assembly INT, 
    product_works_as_expected INT,
    review_helpful TEXT, 
    product_recommended TEXT, 
    FOREIGN KEY(product_id) REFERENCES items(id)
); 

INSERT IGNORE INTO items(id, box_number, product_description, product_size, care_instructions, environment_and_materials, package_details) VALUES(1, '892.284.34', 
'A highchair makes it easier for small children to sit at the same table as adults, which helps them develop social and eating skills.\nEasy to disassemble and transport.\n
Raised edge prevents spills from ending up on the floor.\nWe know that children\'s skin is extra sensitive, but not to worry. 
This product has been tested, approved and is completely free from substances that may harm your child\'s skin or health.\n
This product is intended for children able to sit up unaided and up to 3 years old or a maximum weight of 33 lbs..\nSafety belt included.', '
Width: 22 "\nDepth: 24 3/8 " \nHeight: 35 3/8 " \nSeat width: 9 7/8 " \nSeat depth: 8 5/8 " \nSeat height: 21 1/4 "
\nMax. load: 33 lb', 'Environment\n Seat shell for high chair:\nNo BPA (Bisphenol A) added.\nHigh chair tray: \nNo BPA (Bisphenol A) added.
\nProduct possible to recycle or use for energy recovery, if available in your community. \nMaterials \nSeat shell for high chair/ high chair tray: 
\nPolypropylene', 'Packages: 3\nANTILOP\nhigh chair tray\nANTILOP\nseat shell for high chair\nANTILOP\nhigh chair leg');
INSERT IGNORE INTO items(id, box_number, product_description, product_size, care_instructions, environment_and_materials, package_details) VALUES(2, '803.496.71', 
'You sit comfortably thanks to the restful flexibility of the seat and back.\n
\nDo not use a cleaning agent on the seat shell as the seat shell may be damaged. Use only water for cleaning.\n
\nThis chair has been tested for home use and meets the requirements for durability and safety, set forth in the following standards: EN 12520 and EN 1022.\n
\nDesigner\nCarl Öjerstam', 'Tested for: 243 lb\nWidth: 21 5/8 " \nDepth: 22 "\nHeight: 32 1/4 "\nSeat width: 18 7/8 "Seat depth: 18 1/8 "\nSeat height: 17 3/8 "',
'Wipe dry with a clean cloth.\nFor maximum quality, re-tighten the screws when necessary.', 
'Materials\n
Leg frame:\n    Steel, Chrome plated\nSeat shell:\n    Polycarbonate plastic\nFoot:    Polypropylene\nNut:    Zinc, Chrome plated\nBumpers/ Washers:    Synthetic rubber', 
'Packages: 2\n\nTOBIAS\n\nChair\n\nThis product has multiple packages.'); 
INSERT IGNORE INTO items(id, box_number, product_description, product_size, care_instructions, environment_and_materials, package_details) VALUES(3, '492.519.35', 
'In HAVSTEN you sit deep and low with a comfortable resilience thanks to the elastic mesh in the bottom.\n\n
Create an armchair, loveseat, a sofa or a sectional as large as you like.\n\n
You can just shake off water from a light rain, as the cushion cover is water repellent.\n\n
The cushion covers are dope dyed, a process that reduces consumption of water and dyestuff while improving color fastness compared to traditional dyeing techniques.\n\n
The cushion has a longer life because it can be turned over and used on both sides.\n\n
Easy to keep clean since the cushion cover can be removed and washed.\n\n
The firmness of the mesh fabric can be tightened/adjusted with the strap in the back.\n\n
Designer\nAndreas Fredriksson', 'Width: 32 5/8 "\nDepth: 37 "\nHeight: 35 3/8 "\nSeat depth: 24 3/8 "\nSeat height: 16 1/2 "', 
'Cushion cover\n\nBack cushion, outdoor/seat pad, outdoor\n
Machine wash warm, normal cycle.\nDo not bleach.\nTumble dry, low, normal cycle.\nIron low.\nDo not dry clean.
\n\nChair, in/outdoor\n
Storing: If possible, store in a cool dry place indoors. If the furniture is stored outside, cover it with a waterproof cover. After a rain or snowfall, wipe off excess water or snow from flat surfaces. Allow air to circulate to avoid condensation.
\nStore the sofa cushions in a cool, dry place indoors when the season is over, preferably in a storage bag or storage box to protect from dirt and dust. Make sure the cushions are completely dry before storing.
\nClean: Use a mild soapy solution.\nHand wash warm water.\nDo not bleach.\nDo not tumble dry.\nDo not iron.\nDo not dry clean.', 
'Environment\nBack cushion, outdoor/seat pad, outdoor:
\nThe yarn in this product is dope-dyed, a color method for synthetic fibers, which reduces consumption of water and dye while improving color fastness compared to traditional dyeing techniques.
\nNo perfluorinated chemicals (e.g. PFOS, PFOA, PFOSA) are used to make this product water repellent. As perfluorinated chemicals are non-degradable, it’s better for you and the environment to avoid them.
\nPossible to separate for recycling or energy recovery if available in your community.\n\nMaterials\nBack cushion, outdoor\nCushion cover:
\n100% polyester (min. 90% recycled)\nInner fabric:\n100 % polypropylene\nFilling:\n100 % polyester (100% recycled)', 
'Packages: 5\nHAVSTEN\nseat frame, outdoor\n\nHAVSTEN\nseat pad, outdoor\n\nHAVSTEN\nseat and back frame, outdoor\n\nHAVSTEN\nback cushion, outdoor'); 
INSERT IGNORE INTO items(id, box_number, product_description, product_size, care_instructions, environment_and_materials, package_details) VALUES(4, '601.317.34', 
'The stool can be stacked, so you can keep several on hand and store them in the same space as one.\n\nSuitable for bar height 35⅜".
\n\nThis bar stool has been tested for home use and meets the requirements for durability and safety, set forth in the following standards: EN 12520 and EN 1022.
\n\nDo not use a cleaning agent on the seat shell as the seat shell may be damaged. Use only water for cleaning.\n\nDesigner\nMarcus Arvonen', 
'Tested for: 220 lb\nWidth: 19 5/8 "\nDepth: 18 7/8 "\nHeight: 35 "\nSeat width: 14 5/8 "\nSeat depth: 15 3/4 "\nSeat height: 26 "', 
'Wipe clean with a water dampened cloth.\n\nFor maximum quality, re-tighten the screws when necessary.', 
'Materials\nLeg frame: Steel, Chrome plated\n\nFeet: Polypropylene\n\nSeat shell: Polycarbonate plastic\n\nBumpers: Polyethylene\n\nInsert: Brass', 
'GLENN\nBar stool\n\nPackage(s): 1'); 
INSERT IGNORE INTO items(id, box_number, product_description, product_size, care_instructions, environment_and_materials, package_details) VALUES(5, '704.048.75', 
'You can fold the chairs, so they take less space when you are not using them.\n\nFootrest for extra sitting comfort.\n\nThe plastic feet allow the chair to stand evenly and reduces the risk of pressure marks on a soft floor.
\n\nThe built-in safety lock prevents the bar stool from accidentally folding up when you move it.\n\nSuitable for bar height 35⅜\".
\n\nThis bar stool has been tested for home use and meets the requirements for durability and safety, set forth in the following standards: EN 12520 and EN 1022.
\n\nDesigner\nK Hagberg/M Hagberg', 'Tested for: 220 lb\nWidth: 19 5/8 "\nDepth: 17 3/8 "\nHeight: 37 3/8 "\nSeat width: 13 3/8 "
\nSeat depth: 13 3/8 "\nSeat height: 24 3/4 "', 'Wipe clean with a mild soapy solution.\n\nWipe dry with a clean cloth.
\n\nFor maximum quality, re-tighten the screws when necessary.', 'Materials\nSeat and back: Molded layer-glued wood veneer, Laminate (melamine), 
\nEdge: Clear lacquer\nBracket: Reinforced polyamide\nCrank/ Tubular frame/ Footrest: Steel, Epoxy/polyester powder coating
\nProtector: Polypropylene', 'FRANKLIN\nBar stool with backrest, foldable\nPackage(s): 1'); 
INSERT IGNORE INTO items(id, box_number, product_description, product_size, care_instructions, environment_and_materials, package_details) VALUES(6, '392.077.16', 
'You sit comfortably since the chair is adjustable in height.
\n\nThe safety casters have a pressure-sensitive brake mechanism that keeps the chair in place when you stand up, and releases automatically when you sit down.
\n\nThis product has been developed and tested for domestic use.\n\nRecommended for children 4-12 years of age.
\n\nThe casters are designed for soft floors.
\n\nMay be used with KOLON floor protector.\n\nDesigner\nNicholai Wiig Hansen', 
'Tested for: 110 lb 4 oz\nWidth: 22 7/8 "\nDepth: 22 "\nSeat width: 13 3/4 "\nSeat depth: 12 5/8 "
\nMin. seat height: 14 5/8 "\nMax. seat height: 18 7/8 "', 'Junior seat shell/junior chair frame, swivel
\nWipe clean using a damp cloth and a mild cleaner.\nWipe dry with a clean cloth.', 
'Materials\nJunior seat shell\nMolded plywood, Acrylic paint, Paper, Molded layers of fiberboard
\n\nJunior chair frame, swivel\nCasters/ Casters:\nPolypropylene\n\nStar base/ Seat and back holder:
\n\nSteel, Epoxy/polyester powder coating', 'Packages: 2\nJULES\njunior chair frame, swivel
\n\nJULES\njunior seat shell'); 
INSERT IGNORE INTO items(id, box_number, product_description, product_size, care_instructions, environment_and_materials, package_details) VALUES(7, '993.030.36', 
'High-quality density foam will keep the chair comfortable for many years to come.
\n\nYou sit comfortably since the chair is adjustable in height.
\n\nThe safety casters have a pressure-sensitive brake mechanism that keeps the chair in place when you stand up, and releases automatically when you sit down.
\n\nThis product has been developed and tested for domestic use.\n\nComplies with California TB117-2013 flammability requirements.
\n\nMay be used with KOLON floor protector.\n\nThe casters are designed for soft floors.\n\nDesigner\nS Holmbäck/U Nordentoft', 
'Tested for: 243 lb\nWidth: 26 3/4 "\nDepth: 26 3/4 "\nMax. height: 37 "\nSeat width: 19 1/4 "\nSeat depth: 16 7/8 "
\nMin. seat height: 18 1/8 "\nMax. seat height: 22 7/8 "', 'Non-removable cover\nSwivel chair
\nLight stains can be removed with a textile cleaner or a damp sponge and a mild soapy solution.
\nWipe clean with a mild soapy solution.\nWipe dry with a clean cloth.', 
'Materials\nChair frame, swivel\nCasters/ Base cover: Polypropylene\n
Base plate/ Adjustment lever: Steel, Epoxy powder coating
\nStar base center/ Star base leg: Steel, Epoxy/polyester powder coating
\nTube caps: Reinforced polypropylene \n\nSeat shell\nBack foam/ Seat foam: Polyurethane foam.
\nSeat and back frame: Steel, Epoxy powder coating\nSeat and back: Molded eucalyptus plywood\nFabric: 100 %polyester', 
'Packages: 2\n\nÖRFJÄLL\nchair frame, swivel\n\nÖRFJÄLL\nseat shell'); 
INSERT IGNORE INTO items(id, box_number, product_description, product_size, care_instructions, environment_and_materials, package_details) VALUES(8, '903.200.97', 
'Handwoven back rest and seat, making each and every GRÖNADAL chair one of a kind.
\n\nMade from rattan and ash, natural materials that age with grace.
\n\nThe transparent woven pattern in the back and seat give the rocking chair an airy look, making it flexible and easy to fit in at home.
\n\n10-year limited warrranty. Read about the terms in the limited warranty brochure.\n\nDesigner\nLisa Hilland', 
'Width: 31 1/2 "\nDepth: 31 7/8 "\nHeight: 33 7/8 "\nSeat width: 18 1/2 "\nSeat depth: 17 3/8 "\nSeat height: 16 1/2 "', 
'Wipe clean using a damp cloth and a mild cleaner.\nWipe dry with a clean cloth.\nThe material can dry out and deteriorate if placed near a heat source.', 
'Materials\nWeaving: Rattan, Clear acrylic lacquer\nRocker/ Backside rail/ Armrest: Solid ash, Clear acrylic lacquer
\nArmrest frame/ Seat frame/ Back frame/ Crossbar: Steel, Epoxy/polyester powder coating', 'GRÖNADAL/nRocking chair\nPackage(s): 1'); 
INSERT IGNORE INTO items(id, box_number, product_description, product_size, care_instructions, environment_and_materials, package_details) VALUES(9, '290.066.95', 
'You sit comfortably since the chair is adjustable in height.\n\nThe safety casters have a pressure-sensitive brake mechanism that keeps the chair in place when you stand up, and releases automatically when you sit down.
\n\nThis product has been developed and tested for domestic use.\n\nMay be used with KOLON floor protector.\n\nDesigner\nEva Lilja Löwenhielm/IKEA of Sweden', 
'Tested for: 243 lb\nWidth: 29 1/8 "\nDepth: 29 1/8 "\nSeat width: 17 3/4 "\nSeat depth: 15 3/8 "\nMin. seat height: 16 1/2 "
\nMax. seat height: 21 1/4 "', 'Seat shell\nWipe clean with a mild soapy solution.\nWipe dry with a clean cloth.', 
'Materials\nSeat shell\n Molded plywood, Birch veneer, Stain, Clear acrylic lacquer
\n\nChair frame, swivelCastor/ Cover: \nPolypropylene\n\nStar base center/ Star base leg/ Base plate:
\nSteel, Epoxy/polyester powder coating\n\nTube caps:\nReinforced polypropylene', 
'Packages: 2\n\nSPORREN\nchair frame, swivel\n\nVÅGSBERG\nseat shell'); 
INSERT IGNORE INTO items(id, box_number, product_description, product_size, care_instructions, environment_and_materials, package_details) VALUES(10, '702.886.30', 
'The dampers allow you to stack the chairs.\n\nThe self-adjusting plastic feet adds stability to the chair.
\n\nCan be hung with the armrests on a table top for easy cleaning.\n\nYou sit comfortably thanks to the armrests.
\n\nDurable and hard-wearing. Meets the requirements on furniture for public use.
\n\nThis chair has been tested for public use and meets the requirements for safety, durability and stability set forth in the following standards: EN 16139-Level 1 and ANSI/BIFMA x5.1
\n\nTo be completed with LEIFARNE or SVENBERTIL seat shell.\n\nDesigner\nMia Lagerman', 
'Tested for: 243 lb\nWidth: 20 7/8 "\nDepth: 19 5/8 "\nHeight: 25 5/8 "\nSeat height: 18 1/8 "', 
'Wipe clean with a mild soapy solution.\n\nWipe dry with a clean cloth.\n\nFor maximum quality, re-tighten the screws when necessary.', 
'Environment\nThe material in this product MAY BE recyclable. Please check the recycling rules in your community and if recycling facilities exist in your area.
\n\nMaterials\nFrame:\nSteel, Chrome plated\n\nArmrest cover:\nSynthetic rubber', 
'DIETMAR\nUnderframe for armchair\n\nPackage(s): 1'); 
INSERT IGNORE INTO items(id, box_number, product_description, product_size, care_instructions, environment_and_materials, package_details) VALUES(11,
'003.308.16', "We know that children's skin is extra sensitive, but not to worry. \nThis product has been tested, approved and is completely free from substances that may harm your child's skin or health.
\nRaised edge prevents spills from ending up on the floor.\nThe smooth surface has no nooks or corners which are difficult to reach, making the chair easy to clean.
\n\nDesigner\nJ Fritzdorf/J Feldman/J Hedberg", 'Width: 17 3/8 "\nDepth: 16 1/2 "\nThickness: 1 5/8 "', 
'Wipe clean with a mild soapy solution.\n\nWipe dry with a clean cloth.', 'Environment\nNo BPA (Bisphenol A) added.
\n\nMaterials\nPolypropylene', 'LANGUR\nHigh chair tray\n\nPackage(s): 1'); 
INSERT IGNORE INTO items(id, box_number, product_description, product_size, care_instructions, environment_and_materials, package_details) VALUES(12, 
'502.111.04', 'Easy to bring home since the whole dining set is packed in one box.
\n\nThe wood expression and design of the backrest bring a traditional look to the room.
\n\nEnhance the comfort by adding soft chair pads that fit the seat perfectly.\n\nPine ages beautifully as the color deepens and becomes richer over time.
\n\nDurable solid wood and antique color finish will outlast many years of use.
\n\nWe have tested it for you! The table’s surface is resistant to liquids, food stains, oil, heat, scratches and bumps, while its construction is stable, strong and durable to withstand years of daily use.
\n\nSeats 4.\n\nRecommended for indoor use only.\n\nFor increased stability, re-tighten the screws about two weeks after assembly and when necessary.
\n\nDesigner\nCarina Bengs', 'Table length: 46 1/2 "\nTable width: 29 1/8 "\nTable height: 29 1/8 "\nSeat width: 16 1/8 "
\nSeat depth: 16 1/8 "\nSeat height: 17 3/8 "', 'Wipe clean using a damp cloth and a mild cleaner.\nWipe dry with a clean cloth.', 
'Environment\n100% renewable material. (Fixtures excluded)
\n\nWe have clear requirements for all the wood we use, including a ban on illegally harvested wood. By 2020, we want all our wood to come from more sustainable sources, defined as certified or recycled.
\n\nProduct possible to recycle or use for energy recovery, if available in your community.\n\nMaterials\nSolid pine, Stain, Clear acrylic lacquer',
'JOKKMOKK\nTable and 4 chairs\n\nPackage(s): 1'); 
INSERT IGNORE INTO items(id, box_number, product_description, product_size, care_instructions, environment_and_materials, package_details) VALUES(13,
'002.110.88', 'Solid wood is a durable natural material.\n\nFor increased stability, re-tighten the screws about two weeks after assembly and when necessary.
\n\nMay be completed with FIXA self-adhesive floor protectors to protect the underlying surface against wear.
\n\nThis chair has been tested for home use and meets the requirements for durability and safety, set forth in the following standards: EN 12520 and EN 1022.
\n\nDesigner\nIKEA of Sweden', 'Tested for: 243 lb\nWidth: 16 1/2 "\nDepth: 19 1/4 "\nHeight: 35 3/8 "\nSeat width: 14 1/8 "
\nSeat depth: 15 3/8 "\nSeat height: 17 3/4 "', 'Wipe clean with a mild soapy solution.\n\nWipe dry with a clean cloth.
\n\nFor maximum quality, re-tighten the screws when necessary.', 'Materials\nSolid pine, Stain, Clear acrylic lacquer', 
'STEFAN\nChair\n\nPackage(s): 1'); 
INSERT IGNORE INTO items(id, box_number, product_description, product_size, care_instructions, environment_and_materials, package_details) VALUES(14,
'804.343.58', "Easy to assemble without tools or screws.\n\nYou sit comfortably thanks to the chair's shaped back and seat.
\n\nDesigner\nCarl Öjerstam", 'Tested for: 220 lb\nWidth: 22 7/8 "\nDepth: 22 "\nHeight: 33 1/2 "\nSeat width: 17 3/8 "
\nSeat depth: 17 3/8 "\nSeat height: 17 3/4 "', 'Do not wash.\n\nDo not bleach.\n\nDo not tumble dry.
\n\nDo not iron.\n\nDo not dry clean.', 'Materials\nTotal composition:
\n65 % polyester, 35 % cotton\n\nFoot:\nPolypropylene\n\nSeat frame:\nReinforced polypropylene\n\nSeat shell:
\nPolyester fiber fill, Non-woven polyester fabric\n\nSeat cushion:\nPolypropylene, High resilient polyurethane foam (cold foam).
\n\nLeg:\nSolid ash, Tinted clear acrylic lacquer', 'BALTSAR\nChair\n\nPackage(s): 1'); 
INSERT IGNORE INTO items(id, box_number, product_description, product_size, care_instructions, environment_and_materials, package_details) VALUES(15,
'704.531.25', 'You sit comfortably thanks to the high back and seat with polyester wadding.\n\nThe chair legs are made of solid wood, which is a durable natural material.
\n\nMachine washable cover; easy to keep clean.\n\nFor increased stability, re-tighten the screws about two weeks after assembly and when necessary.
\n\nMay be completed with FIXA stick-on floor protectors to protect the underlying surface against wear.\n\nDesigner\nIKEA of Sweden', 
'Tested for: 243 lb\nWidth: 20 1/8 "\nDepth: 22 7/8 "\nHeight: 37 3/4 "\nSeat width: 20 1/8 "\nSeat depth: 15 3/4 "\n Seat height: 18 7/8 "', 
'Frame\nWipe dry with a clean cloth.\n\nCover\nMachine wash warm, normal cycle.\nDo not bleach.
\nDo not tumble dry.\nIron medium temperature, max 300°F/150°C.\nDo not dry clean.', 
'Environment\nWe have clear requirements for all the wood we use, including a ban on illegally harvested wood. By 2020, we want all our wood to come from more sustainable sources, defined as certified or recycled.
\n\nMaterials\nTotal composition/ Cover:\n100 % polyester\n\nFrame:\nSolid eucalyptus wood, Stain, Clear acrylic lacquer
\n\nSeat:\nFiberboard, Polyurethane foam., Polyester wadding\n\nBack:\n100% recycled solid cardboard, Polyurethane foam., Polyester wadding
\n\nLining:\nNon-woven polypropylene', 'HARRY\nChair\n\nPackage(s): 1'); 
INSERT IGNORE INTO items(id, box_number, product_description, product_size, care_instructions, environment_and_materials, package_details) VALUES(16,
'101.356.59', 'The stool can be stacked, so you can keep several on hand and store them in the same space as one.
\n\nThis stool has been tested for home use and meets the requirements for durability and safety, set forth in the following standards: EN 12520 and EN 1022.
\n\nDesigner\nOla Wihlborg', 'Tested for: 220 lb\nSeat diameter: 12 5/8 "\nWidth: 15 3/4 "\nSeat height: 17 3/4 "', 
'Wipe clean with a mild soapy solution.\nWipe dry with a clean cloth.\nFor maximum quality, re-tighten the screws when necessary.', 
'Materials\nSeat/ Foot:\nPolypropylene\n\nLeg:\nSteel, Epoxy powder coating', 'MARIUS\nStool\n\nPackage(s): 1'); 
INSERT IGNORE INTO items(id, box_number, product_description, product_size, care_instructions, environment_and_materials, package_details) VALUES(17,
'092.195.27', "You can stack the chairs, so they take less space when you're not using them.
\n\nThe self-adjusting plastic feet adds stability to the chair.\n\nFor increased stability, re-tighten the screws about two weeks after assembly and when necessary.
\n\nDesigner\nIKEA of Sweden", 'Tested for: 220 lb\nWidth: 19 1/4 "\nDepth: 20 1/2 "\nHeight: 33 7/8 "\nSeat width: 15 "
\nSeat depth: 15 "\nSeat height: 17 3/4 "', 'Seat shell/chair frame\nWipe dry with a clean cloth.
\n\nChair\nWipe clean using a damp cloth and a mild cleaner.', 'Materials\nSeat shell
\nMolded layer-glued wood veneer, Laminate, Clear acrylic lacquer\n\nChair frame\nSteel, Epoxy/polyester powder coating', 
'Packages: 2\n\nMARTIN\nseat shell\n\nMARTIN\nchair frame'); 
INSERT IGNORE INTO items(id, box_number, product_description, product_size, care_instructions, environment_and_materials, package_details) VALUES(18,
'603.882.58', '10-year Limited Warranty. Read about the terms in the Limited Warranty brochure.
\n\nChanging positions between sitting and standing helps you move your body so you both feel and work better.
\n\nGives an active sitting position, which improves your posture.\n\nThe leather ages beautifully and acquires a nice patina over time.
\n\nComplies with California TB117-2013 flammability requirements.
\n\nThis product has been tested for public use and meets the requirements for safety and durability set forth in the following standards: EN 16139 and ANSI/BIFMA X5.1.
\n\nComplies with California TB117-2013 flammability requirements.\n\nDesigner\nP Süssmann/J Karlsson', 
'Tested for: 243 lb\nSeat diameter: 15 3/8 "\nWidth: 26 "\nHeight: 31 1/2 "\nSeat width: 15 3/8 "
\nSeat depth: 15 3/8 "\nMin. seat height: 26 "\nMax. seat height: 31 1/2 "', 'Wipe clean with a water dampened cloth.', 
'Materials\nSeat:\nMolded eucalyptus plywood\n\nSeat foam:\nHigh resilient polyurethane foam (cold foam).
\n\nCover, underside:\nNon-woven polypropylene
\n\nMechanism/ Gas cylinder/ Foot ring/ Star base leg:\nSteel, Epoxy powder coating
\n\nLeg connector:\nReinforced polyamide\n\nFeet:\nSynthetic rubber\n\nMain parts:
\nDyed through top-grain leather with a treated, embossed and pigmented surface', 'TROLLBERGET\nSit/stand support\n\nPackage(s): 1'); 
INSERT IGNORE INTO items(id, box_number, product_description, product_size, care_instructions, environment_and_materials, package_details) VALUES(19,
'448.811.00', 'Protects flooring against wear and dirt.\n\nSuitable for most types of floors and flat-woven rugs. Not suitable for cork floors or heated wooden floors.
\n\nIf the floor protector is left lying on the floor for a long period a vacuum may form and cause damage to your floor. Therefore, lift the floor protector at regular intervals for ventilation.
\n\nDesigner\nIKEA of Sweden', 'Length: 39 3/8 "\nWidth: 47 1/4 "\nThickness: 1/8 "', 
'Wipe clean with a soft cloth dampened with water and a mild dish detergent or soap, if necessary.\nWipe dry with a clean cloth.
\nIf the floor protector is left lying on the floor for a long period a vacuum may form and cause damage to your floor. 
\nTherefore, lift the floor protector at regular intervals for ventilation.', 
'Environment\nProduct possible to recycle or use for energy recovery, if available in your community.
\n\nMaterials\nPET plastic, Polyurethane plastic', 'KOLON\nFloor protector\n\nPackage(s): 1'); 
INSERT IGNORE INTO items(id, box_number, product_description, product_size, care_instructions, environment_and_materials, package_details) VALUES(20,
'903.078.40', 'Hook and loop fasteners keep the chair pad in place.\n\nThe chair cushion has two identical sides so it can be turned over for even wear.
\n\nMachine washable for easy care.\n\nFits KAUSTBY and INGOLF chairs.\n\nDesigner\nIKEA of Sweden', 
'Min. width: 14 "\nMax. width: 16 "\nDepth: 15 "\nThickness: 3 "\nFilling weight: 12 oz\nTotal weight: 16 oz', 
'Machine wash warm, normal cycle.\nDo not bleach.\nTumble dry, low, normal cycle.\nDo not iron.\nDo not dry clean.', 
'Environment\nRenewable material (cotton).\nTo lower our environmental impact this product is offered without any packaging.
\n\nMaterials\nInterliner:\n100 % polypropylene\n\nFilling material:\n100 % polyester - hollow fiber (100% recycled)
\n\nOuter fabric:\n100 % cotton', 'MALINDA\nChair pad\n\nPackage(s): 1'); 
INSERT IGNORE INTO items(id, box_number, product_description, product_size, care_instructions, environment_and_materials, package_details) VALUES(21,
'902.579.58', 'The bed base can be placed at two different heights.\n\nOne crib side can be removed when the child is big enough to climb into/out of the crib.
\n\nYour baby will sleep both safely and comfortably as the durable materials in the crib base have been tested to ensure they give their body the support it needs.
\n\nThe crib base is well ventilated for good air circulation which gives your child a pleasant sleeping climate.
\n\nMattress and bedlinens are sold separately.\n\nConversion kit included.
\n\nFor your child\'s safety, use a 27½x52\" crib mattress with our cribs.\n\nComplies with US standard 16 CFR 1219.
\n\nDesigner\nJ Asshoff/H Brogård', 'Length: 53 1/2 "\nWidth: 29 1/2 "\nHeight: 43 3/4 "\nBed width: 27 1/2 
\n"Bed length: 52 "\nMax. load: 50 lb', 'Wipe clean using a damp cloth and a mild cleaner. \nWipe clean with a dry cloth.', 
'Environment\nProduct possible to recycle or use for energy recovery, if available in your community.
\nRenewable material (wood).\n\nMaterials\nFabric:\n100 % nylon\n\nHead/footboard/ Bottom panel/ Drawer bottom/ Drawer front:
\nFiberboard, Acrylic paint\n\nBedside/ Spindles/ Bed rail/ Bed base frame/ Knob:\nSolid beech, Acrylic paint
\n\nDrawer back/ Drawer side/ Drawer rail/ Partition:\nSolid beech', 'Packages: 2\n\nGONATT\nCrib\n\nThis product has multiple packages.'); 
INSERT IGNORE INTO items(id, box_number, product_description, product_size, care_instructions, environment_and_materials, package_details) VALUES(22,
'392.414.28', 'Ample storage space is hidden neatly under the bed in 6 large drawers. Perfect for storing quilts, pillows and bed linen.
\n\nSoft-closing drawers run smoothly, slowly and silently.
\n\nStorage in the headboard saves space and makes it easier to access boxes or drawers under the bed; and it’s easier to vacuum too.
\n\nThe soft felt pad absorbs sound, protects from scratches and keeps small items in place.
\n\nYou can choose where to position the boxes and shelves since they easily slot into the headboard’s grooves.
\n\nYou can hide cables for lamps and chargers by feeding them through the holes at the back of the shelf.
\n\nYou decide the height of the headboard since it needs to be mounted to the wall.
\n\nNORDLI headboard is assembled and mounted on the wall in just a few steps.\n\nEasy to bring home since the headboard is divided into two pieces.
\n\nIncludes: 2 shelves (12x10⅝x4") and 2 boxes (9½x4x4").\n\nDesigner\nOla Wihlborg', 
'Height of drawer (inside): 6 1/4 "\nLength: 79 1/2 "\nWidth: 107 7/8 "\nHeight: 11 3/4 "\nDrawer width (inside): 22 7/8 "
\nDrawer depth (inside): 20 1/8 "\nHeadboard height: 44 7/8 "\nMattress length: 78 3/4 "\nMattress width: 76 "', 
'Bed frame with storage/headboard\nWipe clean using a damp cloth and a mild cleaner.\nWipe dry with a clean cloth.', 
'Environment\nBed frame with storage/headboard:\nAt least 80% (weight) of this product is made of wood, a renewable material.
\n\nMaterials\nBed frame with storage\nTop frame/ Drawer front/ Head/footboard:\nFiberboard, Printed acrylic paint\n\nBed base slats:
\nSolid pine\n\nBoard on frame:\nParticleboard and fiberboard with honeycomb paper filling., ABS plastic, Acrylic paint
\n\nRail:\nSolid wood\n\nHeadboard\nPanel:\nParticleboard, Acrylic paint, Plastic edging\n\nConnection/ Rail:
\nFiberboard, Acrylic paint\n\nShelf:\nSteel, Epoxy/polyester powder coating', 'Packages: 7\n\nNORDLI\nbed frame with storage
\nThis product has multiple packages.\n\nNORDLI\nheadboard\nThis product has multiple packages.'); 
INSERT IGNORE INTO items(id, box_number, product_description, product_size, care_instructions, environment_and_materials, package_details) VALUES(23,
'592.688.98', 'Brass-colored details on the headboard, footboard and legs give a unique twist to this classic design.
\n\nThe powder-coated steel frame is strong, sturdy and easy to maintain.
\n\nYou can sit up comfortably in bed thanks to the high headboard – just prop some pillows behind your back and you will have a comfortable place to read or watch TV.
\n\nThere’s plenty of space under the bed for storage boxes – great for stowing extra quilts and sheets.
\n\nYou can choose the mattress comfort that’s best for you – the high headboard and footboard work well with mattresses of different thicknesses.
\n\nThe high footboard keeps bed textiles from falling onto the floor while you sleep.
\n\nWhether you prefer bold or romantic, this versatile bed frame will look great with your choice of textiles and bedroom furniture.
\n\nThe price for this combination includes SKORVA midbeam, but it is a separate product which you pick from its own shelf at the store. If you buy the bed via the website, SKORVA midbeam is included in the delivery.
\n\nSlatted bed base and mattress sold separately.\n\nDesigner\nIKEA of Sweden/Paulin Machado', 'Length: 78 "\nWidth: 56 1/4 "
\nHeight: 55 1/8 "\nFootboard height: 29 1/8 "\nHeadboard height: 55 1/8 "\nHeight under furniture: 9 7/8 "
\nMattress length: 74 3/8 "\nMattress width: 53 1/8 "', 'Bed sides/center support beam\nWipe clean using a damp cloth and a mild cleaner.
\nWipe dry with a clean cloth.', 'Materials\nHead/footboards\nMain parts:\nSteel, Steel, Epoxy/polyester powder coating
\n\nFeet:\nPolypropylene\n\nBed sides\nSteel, Epoxy/polyester powder coating\n\nCenter support beam\nGalvanized steel', 
'Packages: 3\nSAGSTUA\nhead/footboards\n\nSAGSTUA\nbed sides\n\nSKORVA\ncenter support beam'); 
INSERT IGNORE INTO items(id, box_number, product_description, product_size, care_instructions, environment_and_materials, package_details) VALUES(24,
'992.561.72', 'At first glance, it looks like a classic upholstered bed. But beneath the surface, there’s a big secret: storage space. Perfect for bed storage boxes to store extra comforters and pillows.
\n\nThe price for this combination includes SKORVA midbeam, but it is a separate product which you pick from its own shelf at the store. If you buy the bed via the website, SKORVA midbeam is included in the delivery.
\n\nMust be completed with SKORVA center support beam.\n\nDesigner\nIKEA of Sweden/Ola Wihlborg', 
'Length: 82 1/4 "\nWidth: 70 7/8 "\nHeadboard height: 53 1/8 "\nHeight under furniture: 7 7/8 "\nMattress length: 78 3/4 "\nMattress width: 60 1/4 "', 
'Materials\nBed frame cover\n53 % linen, 47 % viscose/rayon
\n\nBed frame\nHeadboard:\nPolyester wadding, Polyester wadding, Polyurethane foam 1.7 lb/cu.ft., Plywood, Solid beech, Solid pine, Fiberboard
\n\nSide panel/ Front:\nPolyester wadding, Polyester wadding, Plywood\n\nMetal parts/ Corner fitting:\nSteel
\n\nCenter support beam\nGalvanized steel', 'Packages: 4\n\nGODFJORD\nbed frame cover\n\nHELLEFJORD\nbed frame\nThis product has multiple packages.
\n\nSKORVA\ncenter support beam'); 
INSERT IGNORE INTO items(id, box_number, product_description, product_size, care_instructions, environment_and_materials, package_details) VALUES(25,
'792.411.86', 'This classic bed frame will look great with your choice of textiles and bedroom furniture. You can even complete the look with other products from the SONGESAND series.
\n\nAmple storage space is hidden neatly under the bed in 4 large drawers. Perfect for storing quilts, pillows and bed linen.
\n\nSONGESAND bed storage boxes work perfectly with SONGESAND bed frame. They fit neatly into the space under the bed and will be flush against sides.
\n\nThe storage boxes are easy to roll out and in thanks to the castors on the base.\n\nYou can separate your linens and quilts since the combination includes one narrow and one wide storage box.
\n\nAdjustable bed sides allow you to use mattresses of different thicknesses.
\n\nThe price for this combination includes SKORVA midbeam, but it is a separate product which you pick from its own shelf at the store. If you buy the bed via the website, SKORVA midbeam is included in the delivery.
\n\nMattress and bedlinens are sold separately.\n\nCoordinates with other furniture in the SONGESAND series.\n\nDesigner\nIKEA of Sweden', 
'Height of drawer (inside): 5 1/2 "\nLength: 77 1/8 "\nWidth: 57 7/8 "\nHeight: 37 3/8 "\nDrawer width (inside): 22 "\nDrawer depth (inside): 25 1/4 "
\nFootboard height: 16 1/8 "\nHeadboard height: 37 3/8 "\nMattress length: 74 3/8 "\nMattress width: 53 1/8 "', 
'Bed frame/underbed storage box, set of 2/center support beam\nWipe clean using a damp cloth and a mild cleaner.\nWipe dry with a clean cloth.', 
'Materials\nBed frame\nLeg:\nFiberboard, Paper foil, ABS plastic\n\nBed end filling/ Rail/ Bedside:\nParticleboard, Paper foil, Plastic edging
\n\nTop rail:\nFiberboard, Paper foil, Plastic edging\n\nUnderbed storage box, set of 2\nDrawer front/ Drawer back/ Drawer sides/ Partition/ Rail:
\nParticleboard, Paper foil, Plastic edging\n\nDrawer bottom:\nFiberboard, Paint, Paper foil\n\nCenter support beam\nGalvanized steel', 
'Packages: 5\n\nSONGESAND\nunderbed storage box, set of 2\n\nSONGESAND\nbed frame\n\nSKORVA\ncenter support beam'); 
INSERT IGNORE INTO items(id, box_number, product_description, product_size, care_instructions, environment_and_materials, package_details) VALUES(26,
'392.881.90', 'May be completed with DELAKTIG floor lamp.\n\nSpecially adapted slat is included. Complete with mattress of choice, min. height 7⅛".
\n\nThe price for this combination includes SKORVA midbeam, but it is a separate product which you pick from its own shelf at the store. If you buy the bed via the website, SKORVA midbeam is included in the delivery.
\n\nDesigner\nTom Dixon/IKEA of Sweden', 'Length: 81 1/8 "\nWidth: 77 1/2 "\nHeight: 39 "', 'Headrest\nBed frame/headboard/2 side tables
\n\nWipe clean regularly with a cloth dampened in a mild cleaner.\nVacuum clean.\nWipe dry with a clean cloth.\nThe material can dry out and deteriorate if placed near a heat source.
\nWipe clean using a damp cloth and a mild cleaner.\nWipe dry with a clean cloth.', 'Environment\nBed frame:\nAt least 50% of aluminum content of this product is made from recycled aluminum.
\n\nMaterials\nBed frame\nFrame/ Leg:\nAluminum, Anodized\n\nPlastic stopper:\nSynthetic rubber, Polyamide\n\nLayer glued slats:\nBeech veneer, Birch veneer, Adhesive resin as coating
\n\nRibbon:\n100 % polyester\n\nHeadboard\nPoplar plywood, Rattan, Clear acrylic lacquer\n\nFixture for headboard\nAluminum, Anodized\n\nCenter support beam
\nGalvanized steel\n\nSide table for frame\nTable top:\nMolded layer-glued wood veneer, Laminate (melamine)
\n\nEdge:\nStain, Clear acrylic lacquer\n\nBracket:\nAluminum, Anodized', 'Packages: 7\n\nDELAKTIG\nside table for frame\n\nDELAKTIG\nbed frame
\n\nDELAKTIG\nheadboard\n\nDELAKTIG\nfixture for headboard\n\nSKORVA\ncenter support beam'); 
INSERT IGNORE INTO items(id, box_number, product_description, product_size, care_instructions, environment_and_materials, package_details) VALUES(27,
'092.752.07', 'Practical storage for an extra pillow, comforter or bedspread.\n\nMade of solid wood, which is a durable and warm natural material.
\n\nAdjustable bed sides allow you to use mattresses of different thicknesses.\n\nThe 4 large drawers give you an extra storage space under the bed.
\n\nCoordinates with other furniture in the HEMNES series.\n\nMattress and bedlinens are sold separately.
\n\nThe price for this combination includes SKORVA midbeam, but it is a separate product which you pick from its own shelf at the store. If you buy the bed via the website, SKORVA midbeam is included in the delivery.
\n\nDesigner\nIKEA of Sweden', 'Length: 83 7/8 "\nWidth: 65 3/4 "\nFootboard height: 26 "\nHeadboard height: 47 1/4 "\nMattress length: 79 1/2 "\nMattress width: 59 7/8 "', 
'Bed frame/underbed storage box, set of 2/center support beam\nWipe clean using a damp cloth and a mild cleaner.\nWipe dry with a clean cloth.', 
'Environment\nSlatted bed base, adjustable:\nAt least 50% (weight) of this product is made from renewable materials.
\n\nMaterials\nBed frame\nSolid pine, Stain, Clear acrylic lacquer\n\nUnderbed storage box, set of 2
\nDrawer front:\nParticleboard, Pine veneer, Stain, Clear acrylic lacquer, Paper foil, Stain, Clear acrylic lacquer
\n\nDrawer sides/ Drawer back/ Drawer divider:\nParticleboard, Paper foil\n\nDrawer bottom:\nFiberboard, Acrylic paint\n\nBottom rail:\nSolid pine
\n\nSlatted bed base, adjustable\nBed base frame:\nSolid beech\n\nLayer glued frame:\nBirch veneer\n\nLayer glued slats:
\nBeech veneer, Birch veneer, Foil, Adhesive resin as coating\n\nBed slat holder:\nHigh impact polystyrene\n\nBed mechanism:\nSteel, Galvanized
\n\nRibbon:\n100 % polypropylene\n\nCenter support beam\n\nGalvanized steel', 'Packages: 7\n\nHEMNES\nunderbed storage box, set of 2\nPackage(s): 2
\n\nLEIRSUND\nslatted bed base, adjustable\nPackage(s): 1\n\nSKORVA\ncenter support beam\nPackage(s): 1\n\nHemnes\nbed frame\nPackage(s): 1'); 
INSERT IGNORE INTO items(id, box_number, product_description, product_size, care_instructions, environment_and_materials, package_details) VALUES(28,
'692.283.93', 'Easy to get in and out of bed because the mattress base makes the bed higher.
\n\nNatural latex helps you to fully relax by contouring your body shape to relieve pressure and provide precise support.
\n\nNatural materials like wool and cotton help air flow through the mattress to make sure you don’t get too warm or cold.
\n\nComfort zones give very precise support and relieve pressure on your shoulders and hips.
\n\nThe distinctive texture on the sides of the mattress and mattress base comes from the natural, undyed and unbleached linen that creates subtle variations in the surface.
\n\nThe textiles closest to your skin are made of 100% cotton from sustainable sources.\n\n25-year Limited Warranty. Read about the terms in the Limited Warranty brochure.
\n\nMAUSUND latex mattress is included in the price but packaged separately.\n\nESPEVÄR foundation and ESPEVÄR cover are included in the price but packaged separately.
\n\nLegs are included in the price but packaged separately.\n\nDesigner\nOla Wihlborg/IKEA of Sweden', 'Length: 79 1/2 "\nWidth: 59 7/8 "\nHeight: 26 3/8 "', 
'Environment\nNatural latex mattress:\nAt least 50% (weight) of this product is made from renewable materials.
\nAll the cotton in our products comes from more sustainable sources. This means that the cotton is either recycled, or grown with less water, less fertilizers and less pesticides, while increasing profit margins for the farmers.
\nProduct possible to recycle or use for energy recovery, if available in your community.
\n\nMaterials\nMattress base\nBed base frame/ Center support beam:\nSolid pine, Solid spruce\n\nBed base slats:\nSolid pine, 100 % polyester
\n\nCover\nTotal composition/ Cover:\n53 % linen, 47 % viscose/rayon\n\nInner fabric:\n100 % cotton\n\nFilling:\nWool wadding, 100 % cotton
\n\nNatural latex mattress\nTicking/ Ticking/ Lining:\n100 % cotton\n\nFilling:\nWool wadding\n\nTicking, side/ Piping/ Handles/ Total composition:
\n53 % linen, 47 % viscose/rayon\n\nComfort material:\n85 % natural/ 15 % synthetic latex\n\nLeg\nSolid oak, Clear acrylic lacquer
\n\nSupport leg\nSteel, Polypropylene, Epoxy powder coating, Epoxy powder coating', 'Packages: 5\n\nBURFJORD\nleg\nPackage(s): 1
\n\nESPEVÄR\nmattress base\nPackage(s): 1\n\nSULTAN\nsupport leg\nPackage(s): 1\n\nESPEVÄR\ncover\nPackage(s): 1\n\nMAUSUND\nnatural latex mattress\nPackage(s): 1'); 
INSERT IGNORE INTO items(id, box_number, product_description, product_size, care_instructions, environment_and_materials, package_details) VALUES(29,
'492.278.08', 'You can quickly convert the stacked beds into a double bed, twin beds or corner sofa.\n\nThe lightweight frames are easy to lift and move.
\n\nThe compact design is perfect for tight spaces or under low ceilings, so you can make the most of your available space.
\n\nThe stacked beds sit evenly since the upper bed has small plastic feet which fit into holes on the lower bed.
\n\nUntreated pine is a sustainable material with natural variations which gives every piece of furniture a unique look. With glazing paint, oil or paint, you can easily make the surface more durable – and your furniture more personal.
\n\nCan be used with up to 5" thick mattresses.\n\nStack max. 2 beds on top of each other.\n\nDo not place anything between the stacked beds that risks lifting the upper bed. For safety reasons it is important that all four legs of the upper bed are firmly placed into the holes of the lower bed.
\n\n2 straps with press studs prevent the beds from sliding apart when they are next to each other.
\n\nSlatted bed base is included.\n\nBed linen sold separately.\n\nMay be completed with FIXA stick-on floor protectors to protect the underlying surface against wear.
\n\nDesigner\nHenrik Preutz/IKEA of Sweden', 'Height, 2 beds: 18 1/8 "\nLength: 76 3/4 "\nWidth: 39 3/8 "\nHeight: 9 "\nPackage quantity: 2 pack\nMattress length: 74 3/8 "
\nMattress width: 38 1/4 "', 'Stackable bed with 2 mattresses\nStains can be removed by using an eraser or fine sandpaper.
\n\nStackable bed\nWipe clean with a damp cloth.\nWipe dry with a clean cloth.\n\nSpring mattress\nWipe clean with a damp cloth.', 
'Environment\nStackable bed:\nRenewable material (wood).\n\nMaterials\nStackable bed\nBedside/ Supporting rail:\nSolid pine, Solid pine
\n\nHead/footboard:\nSolid pine, Solid pine, Solid pine\n\nLeg:\nSolid pine\n\nLayer glued slats:\nBeech veneer, Birch veneer, Adhesive resin as coating
\n\nRibbon:\n100 % polyester\n\nSpring mattress\nTicking/ Ticking, side/ Ticking, underside/ Ticking/ Ticking:\n64 % cotton, 36 % polyester
\n\nWadding:\n65% viscose/rayon, 30% polyester, 5% modacrylic fiber wadding\n\nLining:\nNon-woven polypropylene\n\nZipper:\n100 % polyester\n\nComfort material:
\nPolyurethane foam 1.7 lb/cu.ft.\n\nBonell spring coil:\nSteel, 100 % polyester, Felt liner, 100 % polyester, Felt liner', 
'Packages: 4\n\nUTÅKER\nstackable bed\nThis product has multiple packages.\nPackage(s): 2\n\nHUSVIKA\nspring mattress\nPackage(s): 2');
INSERT IGNORE INTO items(id, box_number, product_description, product_size, care_instructions, environment_and_materials, package_details) VALUES(30,
'992.916.70', 'A classic continental bed with a soft, fully upholstered headboard – perfect for placing in the middle of the room.
\n\nIf you read or watch TV in bed the soft headboard is comfortable to lean against.\n\n17 layer-glued slats adjust to your body weight and increase the suppleness of the mattress.
\n\nMattress is sold separately.\n\nLegs included.\n\nSlatted bed base is included in the price but packaged separately.
\n\nThe price for this combination includes SKORVA midbeam, but it is a separate product which you pick from its own shelf at the store. If you buy the bed via the website, SKORVA midbeam is included in the delivery.
\n\nFits a Queen size bed frame.\n\nDesigner\nIKEA of Sweden/Ola Wihlborg', 'Length: 86 5/8 "\nWidth: 63 "\nHeight: 49 1/4 "\nHeadboard height: 58 5/8 "\nHeight under furniture: 7 7/8 "
\nMattress length: 79 1/2 "\nMattress width: 59 7/8 "', 'Cover\nBed frame\n\nMachine wash warm, normal cycle.\nDo not bleach.\nDo not tumble dry.
\nIron medium temperature, max 300°F/150°C.\nDo not dry clean.', 'Materials\nBed frame\nHeadboard:
\nPolyester wadding, Polyester wadding, Polyurethane foam 1.7 lb/cu.ft., Polyurethane foam 24 kg/cu.m., Plywood, Solid pine, Fiberboard, Solid beech
\n\nMetal parts/ Corner fitting:\nSteel\n\nSide panel/ Foot:\nPolyester wadding, Polyester wadding, Plywood\n\nTotal composition:\n53 % linen, 47 % viscose/rayon
\n\nSlatted bed base\nLayer glued slats:\nEucalyptus veneer, Pine veneer, Adhesive resin as coating\n\nRibbon/ Ribbon:\n100 % polyester\n\nLayer glued slats:
\nBeech veneer, Birch veneer, Adhesive resin as coating\n\nCenter support beam\nGalvanized steel\n\nLeg\nSolid oak, Clear acrylic lacquer', 
'Packages: 5\n\nLURÖY\nslatted bed base\nPackage(s): 1\n\nBURFJORD\nleg\nPackage(s): 1\n\nKVALFJORD\nbed frame\nThis product has multiple packages.\nPackage(s): 2
\n\nSKORVA\ncenter support beam\nPackage(s): 1'); 
INSERT IGNORE INTO items(id, box_number, product_description, product_size, care_instructions, environment_and_materials, package_details) VALUES(31,
'792.486.06', 










