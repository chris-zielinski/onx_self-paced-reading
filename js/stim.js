/** SET STIMULUS OBJECT // LISTS
  -- contx: the context sentence that will be displayed before the self pace reading task
  -- stim: the sentence for the self pace reading task, that will be displayed word by word
  -- pos_dt: positions of words in the stimulus sentence to compute a specific duration : 
  ex. duration between 4th and 6th words: [4,6]
  -- id and cond: extra data that will be added in the recorded data
  */
	function define_self_block(){
	
		var practice_items = [
			{"id":"id_training_1", "cond": "TRAINING", "contx":"Here is a sentence you read at your ease.", "stim":"Now, you are reading a sentence word by word."},
			{"id":"id_training_2", "cond": "TRAINING", "contx":"It was a sunny day.", "stim":"So, John and Mary went to the beach."},
			{"id": "id_training_3", "cond": "TRAINING", "contx": "George won the lottery ticket.", "stim":"The first thing he did was to buy a house on the beach."},
			{"id": "id_training_4", "cond": "TRAINING", "contx": "Jack won the prize as the best young architect.", "stim":"Thus, he drew the hall of the new hotel in New York."},
			{"id": "id_training_5", "cond": "TRAINING", "contx": "It was a significant moment for Fred's career.", "stim":"For the first time, he flew a plane all by himself."}
		]; 
		var pract_check = {
			id_training_2: {quest: "Did they go to the mall?",opt_str: ["Yes","No"],opt_val: [0,1]}
		};


		
		// number of block per list
		// each block of trials will be separated by a pause
		var nblock = 3;
		
		// all stim
		var all_stim = {
			list_1: [
				{"id": "id_1", "cond": "A", "contx": "Emma is good at keeping secrets.", "stim": "For years she bit her tongue about my nose job.", "pos_dt": [4, 6]},
				{"id": "id_6", "cond": "C", "contx": "Nathan had to go and fix up the beach house every time there was a storm.", "stim": "Once he blew the algae using air hoses from his porch.", "pos_dt": [3, 5]},
				{"id": "id_8", "cond": "B", "contx": "Alan was playing with the ball in the house.", "stim": "So he broke the glass of an old showcase.", "pos_dt": [3, 5]},
				{"id": "id_10", "cond": "A", "contx": "George was a brilliant programmer.", "stim": "Once, he broke the mold with his innovative software.", "pos_dt": [3, 5]},
				{"id": "id_15", "cond": "C", "contx": "Megan left without blowing out the candle as usual.", "stim": "That time she burned her gallery to the ground.", "pos_dt": [4, 6]},
				{"id": "id_17", "cond": "B", "contx": "Oliver and his sister saw their dog getting hit by a car.", "stim": "Eventually, they buried the remains of their beloved pet in their garden.", "pos_dt": [3, 5]},
				{"id": "id_19", "cond": "A", "contx": "Katie didn't use to believe in climate change.", "stim": "Then she changed her tune after lots of readings.", "pos_dt": [3, 5]},
				{"id": "id_22", "cond": "A", "contx": "Owen had not seen Lisa for years.", "stim": "For a while, he chewed the fat with her talking about past times.", "pos_dt": [4, 6]},
				{"id": "id_27", "cond": "C", "contx": "Janice was organizing the mid-season sales.", "stim": "That day she cleared the store of items from the previous season.", "pos_dt": [4, 6]},
				{"id": "id_29", "cond": "B", "contx": "When Derek was young, his older brother managed his bank account.", "stim": "For years he clipped his coupons and collected his interest.", "pos_dt": [4, 6]},
				{"id": "id_31", "cond": "A", "contx": "Ben is not going to get that promotion now.", "stim": "He just cooked his goose with the scandal he caused.", "pos_dt": [3, 5]},
				{"id": "id_36", "cond": "C", "contx": "The police came to the school and arrested Robert.", "stim": "We were surprised to learn that he had cooked the drugs found in the Chemistry laboratory.", "pos_dt": [8, 10]},
				{"id": "id_38", "cond": "B", "contx": "Sue wanted to sneak into the party without being recognized.", "stim": "For that, she covered her face with a white mask.", "pos_dt": [4, 6]},
				{"id": "id_40", "cond": "A", "contx": "Sophia hadn't thought about her high school best friend in years.", "stim": "Unexpectedly, she crossed her mind one night, so she decided to trace her back.", "pos_dt": [3, 5]},
				{"id": "id_44", "cond": "B", "contx": "Frank always looked perfect.", "stim": "I remember he cut his hair every weekend.", "pos_dt": [4, 6]},
				{"id": "id_48", "cond": "C", "contx": "When Colette was 8, she was a member of Girl Scout troops.", "stim": "In the end, she earned her bunny collecting all the Scout patches.", "pos_dt": [5, 7]},
				{"id": "id_49", "cond": "A", "contx": "Last year, Gabby lost her job.", "stim": "I know she felt the pinch of not being able to afford her previous lifestyle.", "pos_dt": [4, 6]},
				{"id": "id_54", "cond": "C", "contx": "The PTS Company bought the Eagle Casino.", "stim": "Surprisingly, it fit the staff of new uniforms to show the change in management.", "pos_dt": [3, 5]},
				{"id": "id_56", "cond": "B", "contx": "John asked Mary to help him cook the cake.", "stim": "So she greased the pan with butter and preheated the oven.", "pos_dt": [3, 5]},
				{"id": "id_60", "cond": "C", "contx": "I saw Oliver fidgeting in the garden.", "stim": "Suddenly, he hit the flowers and screamed for no reason.", "pos_dt": [3, 5]},
				{"id": "id_62", "cond": "B", "contx": "Charlotte did not like needles.", "stim": "But instead, she held her breath and didn't even notice the sting.", "pos_dt": [4, 6]},
				{"id": "id_66", "cond": "C", "contx": "Ted saw a large puddle on the sidewalk.", "stim": "In the heat of the moment, he jumped the mud, but he slipped and got all dirty.", "pos_dt": [8, 10]},
				{"id": "id_67", "cond": "A", "contx": "Finn changed his life after his father's death.", "stim": "All of a sudden he kicked the habit and stopped smoking cigarettes.", "pos_dt": [6, 8]},
				{"id": "id_72", "cond": "C", "contx": "Anna talked smut during our dinner.", "stim": "We were surprised to hear she learned the joke from her father.", "pos_dt": [7, 9]},
				{"id": "id_73", "cond": "A", "contx": "Shelby made a disastrous performance last year.", "stim": "As matter of fact, she licked her wounds and retired for a while after that.", "pos_dt": [6, 8]},
				{"id": "id_78", "cond": "C", "contx": "Ian was told that the moving company was reliable.", "stim": "But ultimately, he lost his plates and they broke several of his furniture.", "pos_dt": [4, 6]},
				{"id": "id_80", "cond": "B", "contx": "Eugene was extremely nervous at the beginning of each competition.", "stim": "Even that time, he missed the target in the first round.", "pos_dt": [5, 7]},
				{"id": "id_82", "cond": "A", "contx": "Sam never took responsibility for his mistakes.", "stim": "He always passed the buck to somebody else.", "pos_dt": [3, 5]},
				{"id": "id_87", "cond": "C", "contx": "Two days after buying it, Ryan's tablet began to turn off for no reason.", "stim": "He sure paid the device more than it was worth.", "pos_dt": [3, 5]},
				{"id": "id_89", "cond": "B", "contx": "Dave told us his grandfather used to run the farm all by himself", "stim": "As a matter of fact, he picked his fruits all by himself.", "pos_dt": [7, 9]},
				{"id": "id_93", "cond": "C", "contx": "Jessica sat down at the crowded table.", "stim": "Indeed she pulled her drink towards her to prevent it from falling.", "pos_dt": [3, 5]},
				{"id": "id_95", "cond": "B", "contx": "Sam trained hard this past year for the Track and Field Championships.", "stim": "He literally pushed his limits to run under 49 seconds in the 400.", "pos_dt": [3, 5]},
				{"id": "id_97", "cond": "A", "contx": "For our anniversary, Andrew took me out for dinner.", "stim": "It was nice he read my mind and took me exactly where I wanted to go!", "pos_dt": [5, 7]},
				{"id": "id_102", "cond": "C", "contx": "That day Eva got stuck in the mud.", "stim": "Next thing, she rocked the bike from side to side but it was still stuck.", "pos_dt": [4, 6]},
				{"id": "id_103", "cond": "A", "contx": "Jack never felt satisfied devoting his time and attention to one thing.", "stim": "Indeed, he scratched the surface of several hobbies and interests.", "pos_dt": [3, 5]},
				{"id": "id_107", "cond": "B", "contx": "Arthur still couldn't aim properly", "stim": "Actually, he shot the arrow too far and missed the mark.", "pos_dt": [3, 5]},
				{"id": "id_109", "cond": "A", "contx": "Dana knew something was wrong.", "stim": "She told me she smelled a rat the minute she entered the room.", "pos_dt": [5, 7]},
				{"id": "id_114", "cond": "C", "contx": "I had just finished thoroughly cleaning the kitchen.", "stim": "Unfortunately, Olivia spilled the rice all over the floor.", "pos_dt": [3, 5]},
				{"id": "id_116", "cond": "B", "contx": "Max offered to pay for dinner for his friends.", "stim": "But someone stole his wallet when he went to the restroom.", "pos_dt": [3, 5]},
				{"id": "id_119", "cond": "B", "contx": "Willow had a severe migraine that day.", "stim": "In the end, she swallowed her pill and went to sleep.", "pos_dt": [5, 7]},
				{"id": "id_121", "cond": "A", "contx": "Ken had been putting his dreams off for years.", "stim": "Then he took the plunge and finally enrolled in a college course.", "pos_dt": [3, 5]},
				{"id": "id_126", "cond": "C", "contx": "Joey moved slowly along the wall of the house.", "stim": "This way, he tested the window to see if he could prise one open.", "pos_dt": [4, 6]},
				{"id": "id_127", "cond": "A", "contx": "That night Paul told her mom he had crashed the car into a pole.", "stim": "In the heat of the moment, she threw a fit and grounded him for an entire year.", "pos_dt": [8, 10]},
				{"id": "id_132", "cond": "C", "contx": "It was the first time Chris bought some furniture at Ikea.", "stim": "In the end, he successfully tightened the holder on the wall.", "pos_dt": [6, 8]},
				{"id": "id_134", "cond": "B", "contx": "Volleyball was Faye's passion.", "stim": "In fact, she touched a ball when he was 4 and never stopped since then.", "pos_dt": [4, 6]},
				{"id": "id_136", "cond": "A", "contx": "It looked like Damian was about to resign.", "stim": "Though he turned the tables on his opponent and checkmated.", "pos_dt": [3, 5]},
				{"id": "id_140", "cond": "B", "contx": "Alan managed to fix the television.", "stim": "Then, he twisted the wire to make it stronger.", "pos_dt": [3, 5]},
				{"id": "id_144", "cond": "C", "contx": "In the office, Sally was the only one who did not worry about recycling.", "stim": "Even that time, she wasted a sheet of paper when one would be sufficient.", "pos_dt": [5, 7]}	
				],
			list_2: [
				{"id": "id_2", "cond": "B", "contx": "Emma had damaging habits when she was a child.", "stim": "For years she bit her nails and pulled her hair out.", "pos_dt": [4, 6]},
				{"id": "id_4", "cond": "A", "contx": "Nathan is a precision maniac.", "stim": "Once he blew a fuse for a small scratch on his car.", "pos_dt": [3, 5]},
				{"id": "id_9", "cond": "C", "contx": "Alan accidentally dropped the shopping bag from the dock.", "stim": "So he broke the gift he had just bought for Amy.", "pos_dt": [3, 5]},
				{"id": "id_11", "cond": "B", "contx": "George used to pick fights in bars.", "stim": "Once, he broke the rib of a guy in the brawl.", "pos_dt": [3, 5]},
				{"id": "id_13", "cond": "A", "contx": "Megan insulted her boss in front of the whole staff.", "stim": "That time she burned her bridges with her actions.", "pos_dt": [4, 6]},
				{"id": "id_18", "cond": "C", "contx": "Oliver and his sister had to hide the evidence of their crime.", "stim": "Eventually, they buried the machete in an isolated park.", "pos_dt": [3, 5]},
				{"id": "id_20", "cond": "B", "contx": "Katie used to care only about her job.", "stim": "Then she changed her habits and started to take time for herself.", "pos_dt": [3, 5]},
				{"id": "id_23", "cond": "B", "contx": "Owen decided to stop smoking.", "stim": "For a while, he chewed the gum and put on nicotine patches with no results.", "pos_dt": [4, 6]},
				{"id": "id_25", "cond": "A", "contx": "Janice started discussing what had happened.", "stim": "That day she cleared the air between them after so long.", "pos_dt": [4, 6]},
				{"id": "id_30", "cond": "C", "contx": "Derek used to live in a small basement with no windows or garden.", "stim": "For years, he clipped his clothes to a wire in the living room to let them dry.", "pos_dt": [4, 6]},
				{"id": "id_32", "cond": "B", "contx": "Ben cannot prepare even the simplest dishes.", "stim": "He just cooked his pasta until it turned into shreds.", "pos_dt": [3, 5]},
				{"id": "id_34", "cond": "A", "contx": "Robert tried everything to save his company from collapse.", "stim": "We were surprised to learn that he had cooked the books to avoid bankruptcy.", "pos_dt": [8, 10]},
				{"id": "id_39", "cond": "C", "contx": "Every time Sue bought a new game, her brother stole it.", "stim": "For that, she covered the figurine with a blanket to hide it from him.", "pos_dt": [4, 6]},
				{"id": "id_41", "cond": "B", "contx": "The English teacher turned to Sophia and asked her a question.", "stim": "Unexpectedly, she crossed her arm and refused to answer him.", "pos_dt": [3, 5]},
				{"id": "id_45", "cond": "C", "contx": "Frank was a restless child.", "stim": "I remember he cut his club in two near the handle.", "pos_dt": [4, 6]},
				{"id": "id_46", "cond": "A", "contx": "College was very expensive for Colette.", "stim": "In the end, she earned her keep by shoveling snow in the winter.", "pos_dt": [5, 7]},
				{"id": "id_50", "cond": "B", "contx": "Gabby went out after being locked in her house for two months.", "stim": "I know she felt the warmth of the sun and smiled after all that time.", "pos_dt": [4, 6]},
				{"id": "id_52", "cond": "A", "contx": "Gemma bought a dog to avoid loneliness.", "stim": "Surprisingly, it fit the bill making her smile again.", "pos_dt": [3, 5]},
				{"id": "id_57", "cond": "C", "contx": "John asked Mary to help him clean the weapons.", "stim": "So she greased the swords with Vaseline and stored them.", "pos_dt": [3, 5]},
				{"id": "id_58", "cond": "A", "contx": "Oliver used to be my best friend.", "stim": "Suddenly, he hit the road and disappeared without saying goodbye.", "pos_dt": [3, 5]},
				{"id": "id_63", "cond": "C", "contx": "Charlotte told her parents she had gotten a new pet.", "stim": "But instead, she held her bug in her hand and showed it to them.", "pos_dt": [4, 6]},
				{"id": "id_64", "cond": "A", "contx": "Tracy and Ted had been dating for a month.", "stim": "In the heat of the moment, he jumped the gun and proposed to her.", "pos_dt": [8, 10]},
				{"id": "id_68", "cond": "B", "contx": "It was the first match for Finn.", "stim": "All of a sudden he kicked the ball into the net and won the match.", "pos_dt": [6, 8]},
				{"id": "id_70", "cond": "A", "contx": "Anna knows how to sail.", "stim": "We were surprised to hear she learned the ropes all by herself.", "pos_dt": [7, 9]},
				{"id": "id_74", "cond": "B", "contx": "Shelby was eating when her boss arrived at her desk.", "stim": "As matter of fact, she licked her lips to get any remaining crumbs off.", "pos_dt": [6, 8]},
				{"id": "id_76", "cond": "A", "contx": "Ian was considered one of the best tennis players in North America.", "stim": "But ultimately, he lost his edge during college and ended up being a coach.", "pos_dt": [4, 6]},
				{"id": "id_81", "cond": "C", "contx": "For the third year in a row, Eugene spent his summer vacations in Santorini.", "stim": "Even that time, he missed the hotel as soon as he left.", "pos_dt": [5, 7]},
				{"id": "id_83", "cond": "B", "contx": "Sam was an incredibly hardworking guy.", "stim": "He always passed the exams with top marks.", "pos_dt": [3, 5]},
				{"id": "id_85", "cond": "A", "contx": "Ryan woke up with a terrible hangover.", "stim": "He sure paid the price for drinking too much the night before.", "pos_dt": [3, 5]},
				{"id": "id_90", "cond": "C", "contx": "Dave was happy that the professor had published his work.", "stim": "As a matter of fact, he picked his essay from a stack of 200.", "pos_dt": [7, 9]},
				{"id": "id_91", "cond": "A", "contx": "Jessica loved to kid with her little sister.", "stim": "Indeed she pulled her leg for years and years.", "pos_dt": [3, 5]},
				{"id": "id_96", "cond": "C", "contx": "Sam ran out of gas and he didn't want to call a tow truck.", "stim": "He literally pushed his van to the nearest gas station.", "pos_dt": [3, 5]},
				{"id": "id_98", "cond": "B", "contx": "After several weeks the editor finally called me back.", "stim": "It was nice he read my stories and decided to publish them.", "pos_dt": [5, 7]},
				{"id": "id_100", "cond": "A", "contx": "It was a lovely dinner with my family until Eva arrived.", "stim": "Next thing, she rocked the boat by bringing up politics.", "pos_dt": [4, 6]},
				{"id": "id_104", "cond": "B", "contx": "After a day with his nephews, Jack started feeling awkward.", "stim": "Indeed, he scratched the head one hour before realizing he had lice.", "pos_dt": [3, 5]},
				{"id": "id_108", "cond": "C", "contx": "Suddenly they heard a noise coming from the bush and Arthur took the gun.", "stim": "Actually, he shot the snake as if it were an enormous bear.", "pos_dt": [3, 5]},
				{"id": "id_110", "cond": "B", "contx": "Dana spent her childhood in the city and she went to the countryside when she was just 15.", "stim": "She told me she smelled a rose for the first time that time.", "pos_dt": [5, 7]},
				{"id": "id_112", "cond": "A", "contx": "We were organizing a party for Adam.", "stim": "Unfortunately, Olivia spilled the beans and told him.", "pos_dt": [3, 5]},
				{"id": "id_117", "cond": "C", "contx": "That day Max had to leave for a business trip.", "stim": "But someone stole his trolley from the bus preventing him from departing.", "pos_dt": [3, 5]},
				{"id": "id_120", "cond": "C", "contx": "Willow hadn't eaten since the morning and was hungry.", "stim": "In the end, she swallowed her soup too quickly and risked to choke on it.", "pos_dt": [5, 7]},
				{"id": "id_122", "cond": "B", "contx": "Ken was having trouble getting to sleep at night.", "stim": "Then he took the pill prescribed by the doctor and finally slept well.", "pos_dt": [3, 5]},
				{"id": "id_124", "cond": "A", "contx": "Joey presented his project to some close colleagues.", "stim": "This way, he tested the waters before the general meeting.", "pos_dt": [4, 6]},
				{"id": "id_129", "cond": "C", "contx": "After a whole week, there was no version of the poem that Julie liked.", "stim": "In the heat of the moment, she threw a draft out of the window.", "pos_dt": [8, 10]},
				{"id": "id_131", "cond": "B", "contx": "Chris was assembling the robot for his son.", "stim": "In the end, he successfully tightened the screw without breaking the plastic.", "pos_dt": [6, 8]},
				{"id": "id_133", "cond": "A", "contx": "The entire audience was crying after Faye's speech.", "stim": "In fact, she touched a nerve nobody knew.", "pos_dt": [4, 6]},
				{"id": "id_138", "cond": "C", "contx": "Damian was painting when he dropped his brush staining everywhere.", "stim": "Though he turned the panel to the other side to hide the splashes.", "pos_dt": [3, 5]},
				{"id": "id_139", "cond": "A", "contx": "After a long fight, George said it was over.", "stim": "Then, he twisted the knife and said he had never loved me.", "pos_dt": [3, 5]},
				{"id": "id_143", "cond": "B", "contx": "Sally used to spend her allowance on unnecessary stuff.", "stim": "Even that time, she wasted her dollars on a vegetable peeler.", "pos_dt": [5, 7]}
				],
			list_3: [
				{"id": "id_3", "cond": "C", "contx": "Emma suffered from a nervous disorder.", "stim": "For many years she bit her pens and ate the glue.", "pos_dt": [4, 6]},
				{"id": "id_5", "cond": "B", "contx": "Nathan's children used to scream all over the house.", "stim": "Once he blew a whistle to call them to dinner.", "pos_dt": [3, 5]},
				{"id": "id_7", "cond": "A", "contx": "Alan was nervous about meeting Samantha's parents.", "stim": "So he broke the ice with a joke.", "pos_dt": [3, 5]},
				{"id": "id_12", "cond": "C", "contx": "Due to his carelessness, George smashed several pieces of furniture over the years.", "stim": "Once, he broke the rack in the living room.", "pos_dt": [3, 5]},
				{"id": "id_14", "cond": "B", "contx": "After a hard day, Megan used to take some time for herself.", "stim": "That time she burned her candles and took a long bath.", "pos_dt": [4, 6]},
				{"id": "id_16", "cond": "A", "contx": "Oliver and his sister were sad after their huge fight.", "stim": "Eventually, they buried the hatchet and finally stopped arguing.", "pos_dt": [3, 5]},
				{"id": "id_21", "cond": "C", "contx": "Katie was sick, and the anti-nausea didn't seem to work.", "stim": "Then she changed her tablets and she got over that ok.", "pos_dt": [3, 5]},
				{"id": "id_24", "cond": "C", "contx": "Owen suffered from pica disorder.", "stim": "For a while, he chewed the wax of candles and swallowed it once melted.", "pos_dt": [4, 6]},
				{"id": "id_26", "cond": "B", "contx": "Janice was renovating a whole house", "stim": "That day she cleared the land and planted new grass and trees.", "pos_dt": [4, 6]},
				{"id": "id_28", "cond": "A", "contx": "Derek was too strict with his daughter.", "stim": "For years he clipped her wings and forbade her to go to parties.", "pos_dt": [4, 6]},
				{"id": "id_33", "cond": "C", "contx": "Ben prepares simple dishes with vegetables and fruit he grows himself.", "stim": "He just cooked his oranges with cinnamon and honey.", "pos_dt": [3, 5]},
				{"id": "id_35", "cond": "B", "contx": "At the end of the dinner, we discovered the cook was Robert.", "stim": "We were surprised to learn that he had cooked the food we just ate.", "pos_dt": [8, 10]},
				{"id": "id_37", "cond": "A", "contx": "Sue robbed the prestigious bank.", "stim": "For that, she covered her tracks and disappeared for a while.", "pos_dt": [4, 6]},
				{"id": "id_42", "cond": "C", "contx": "That day Sophia was working at her desk as usual.", "stim": "Unexpectedly, she crossed her office, went out, and never came back.", "pos_dt": [3, 5]},
				{"id": "id_43", "cond": "A", "contx": "Frank is a brilliant reporter.", "stim": "I remember he cut his teeth at a prestigious journal.", "pos_dt": [4, 6]},
				{"id": "id_47", "cond": "B", "contx": "Colette studied non-stop throughout the year.", "stim": "In the end, she earned her B.A. summa cum laude from UCLA.", "pos_dt": [5, 7]},
				{"id": "id_51", "cond": "C", "contx": "That time, Gabby paid close attention to the fabrics she had to use.", "stim": "I know she felt the jeans carefully to understand if the fabric was worn.", "pos_dt": [4, 6]},
				{"id": "id_53", "cond": "B", "contx": "Gemma was not sure about the logo she drew.", "stim": "Surprisingly, it fit the needs of the clients and gained a bonus.", "pos_dt": [3, 5]},
				{"id": "id_55", "cond": "A", "contx": "Mary's clients didn't want to re-sign the contract.", "stim": "So she greased the wheels by offering them cash incentives.", "pos_dt": [3, 5]},
				{"id": "id_59", "cond": "B", "contx": "Oliver used to play football in the house.", "stim": "Suddenly, he hit the ball and broke the crystal vase.", "pos_dt": [3, 5]},
				{"id": "id_61", "cond": "A", "contx": "Charlotte wanted to tell her boss what she thought about him.", "stim": "But instead, she held her tongue and stayed silent.", "pos_dt": [4, 6]},
				{"id": "id_65", "cond": "B", "contx": "Ted was locked out of the garden.", "stim": "In the heat of the moment, he jumped the fence and fell into the bush.", "pos_dt": [8, 10]},
				{"id": "id_69", "cond": "C", "contx": "That day Finn had completely lost his temper.", "stim": "All of a sudden he kicked the sister of his best friend in the head.", "pos_dt": [6, 8]},
				{"id": "id_71", "cond": "B", "contx": "Growing up Anna became an experienced magician", "stim": "We were surprised to hear she learned the tricks all by herself.", "pos_dt": [7, 9]},
				{"id": "id_75", "cond": "C", "contx": "Shelby didn't know any manners, she was a disaster at the gala dinner.", "stim": "As matter of fact, she licked her blade at the end of the main course.", "pos_dt": [6, 8]},
				{"id": "id_77", "cond": "B", "contx": "The legend says the ruthless dictator unleashed the army to appease the reprisals.", "stim": "But ultimately, he lost his battle against rebel forces and was forced to surrender.", "pos_dt": [4, 6]},
				{"id": "id_79", "cond": "A", "contx": "When Eugene arrived at the box office he discovered all concert tickets had been sold.", "stim": "Even that time, he missed the boat, and we went without him.", "pos_dt": [5, 7]},
				{"id": "id_84", "cond": "C", "contx": "Sam was pretty sloppy.", "stim": "He always passed the honey getting his hands dirty.", "pos_dt": [3, 5]},
				{"id": "id_86", "cond": "B", "contx": "Ryan got a reminder to send in the payment before the end of the year.", "stim": "He sure paid the taxes right away to avoid forgetting it.", "pos_dt": [3, 5]},
				{"id": "id_88", "cond": "A", "contx": "Dave had just started acting in small theaters when he met Edward Norton.", "stim": "As a matter of fact, he picked his brain for any tips he could have.", "pos_dt": [7, 9]},
				{"id": "id_92", "cond": "B", "contx": "I saw Jessica act aggressively towards her sister.", "stim": "Indeed she pulled her hair while yelling in the street.", "pos_dt": [3, 5]},
				{"id": "id_94", "cond": "A", "contx": "Sam lost everything at blackjack.", "stim": "He literally pushed his luck too much and ended with nothing.", "pos_dt": [3, 5]},
				{"id": "id_99", "cond": "C", "contx": "I asked Andrew for advice on some investments the bank had proposed to me.", "stim": "It was nice he read my risks in the contract, so I could save my money.", "pos_dt": [5, 7]},
				{"id": "id_101", "cond": "B", "contx": "Eva was playing animatedly in the dining room.", "stim": "Next thing, she rocked the chair back and forth until she broke it.", "pos_dt": [4, 6]},
				{"id": "id_105", "cond": "C", "contx": "Jack wanted to forget about Anne after the break-up.", "stim": "Indeed, he scratched the pictures she appeared in and erased her face.", "pos_dt": [3, 5]},
				{"id": "id_106", "cond": "A", "contx": "Arthur called Julia on the phone to say hi.", "stim": "Actually, he shot the breeze with her the entire night.", "pos_dt": [3, 5]},
				{"id": "id_111", "cond": "C", "contx": "Dana went to the botanic park yesterday.", "stim": "She told me she smelled a bush she had never seen before.", "pos_dt": [5, 7]},
				{"id": "id_113", "cond": "B", "contx": "We were cleaning the kitchen for the party.", "stim": "Unfortunately, Olivia spilled the milk all over the floor.", "pos_dt": [3, 5]},
				{"id": "id_115", "cond": "A", "contx": "Max had planned to tell everyone about his discovery at the meeting.", "stim": "But someone stole his thunder by revealing it to the chief.", "pos_dt": [3, 5]},
				{"id": "id_118", "cond": "A", "contx": "Willow could not admit that she was wrong.", "stim": "In the end, she swallowed her pride and apologized to her mother.", "pos_dt": [5, 7]},
				{"id": "id_123", "cond": "C", "contx": "Ken set several traps around the house and waited.", "stim": "Then he took the coyote that had rummaged through his trash for weeks.", "pos_dt": [3, 5]},
				{"id": "id_125", "cond": "B", "contx": "Joey had the opportunity to do an internship in the physics laboratory.", "stim": "This way, he tested the theory he was studying against real data.", "pos_dt": [4, 6]},
				{"id": "id_128", "cond": "B", "contx": "Julie was furious with Paul for cheating on her.", "stim": "In the heat of the moment, she threw a stone at his car and ran off.", "pos_dt": [8, 10]},
				{"id": "id_130", "cond": "A", "contx": "Chris wanted to go to Rome for summer break.", "stim": "In the end, he successfully tightened his belt to save money.", "pos_dt": [6, 8]},
				{"id": "id_135", "cond": "C", "contx": "The boys wanted to play a prank on Faye but got no reaction.", "stim": "In fact, she touched a bug with no worries.", "pos_dt": [4, 6]},
				{"id": "id_137", "cond": "B", "contx": "Damian was studying when his sister put the music at full volume.", "stim": "Though he turned the page and continued to read.", "pos_dt": [3, 5]},
				{"id": "id_141", "cond": "C", "contx": "Alan has a dog who always tries to jump the garden's fence.", "stim": "Then, he twisted the net of the fence to not let it out.", "pos_dt": [3, 5]},
				{"id": "id_142", "cond": "A", "contx": "Sally went to the board of directors and presented her project.", "stim": "Even that time, she wasted her breath trying to pitch her idea to them.", "pos_dt": [5, 7]}
				]
		}; 
		
		// check object (check-point to control the subject's attention)
		var check_obj = {
			list_1: {
				id_8: {quest: "Did Alan break a window?",opt_str: ["Yes","No"],opt_val: [0,1]},
				id_22: {quest: "Did they eat fat food?",opt_str: ["Yes","No"],opt_val: [0,1]},
				id_44: {quest: "Did Frank care about his appearance?",opt_str: ["Yes","No"],opt_val: [1,0]},
				id_56: {quest: "Was John cooking a cake?",opt_str: ["Yes","No"],opt_val: [1,0]},
				id_66: {quest: "Did Ted manage to jump over the puddle?",opt_str: ["Yes","No"],opt_val: [0,1]},
				id_78: {quest: "Did the moving company lose Ian's dishes?",opt_str: ["Yes","No"],opt_val: [1,0]},
				id_93: {quest: "Did Jessica drop her drink?",opt_str: ["Yes","No"],opt_val: [0,1]},
				id_102: {quest: "Was Eva driving a scooter?",opt_str: ["Yes","No"],opt_val: [0,1]},
				id_107: {quest: "Did Arthur win the match?",opt_str: ["Yes","No"],opt_val: [0,1]},
				id_114: {quest: "Did they clean the kitchen?",opt_str: ["Yes","No"],opt_val: [1,0]},
				id_132: {quest: "Did Chris assemble a holder?",opt_str: ["Yes","No"],opt_val: [1,0]},
				id_144: {quest: "Did Sally use to waste paper?",opt_str: ["Yes","No"],opt_val: [1,0]}					
			},
			list_2: {
				id_9:{quest:"Did Alan buy a gift for Amy?",opt_str: ["Yes","No"],opt_val: [1,0]},
				id_23: {quest:"Did Owen smoke?",opt_str: ["Yes","No"],opt_val: [1,0]},
				id_45: {quest:"Did Frank destroy a doll?",opt_str: ["Yes","No"],opt_val: [0,1]},
				id_57: {quest:"Did Mary buy some weapons?",opt_str: ["Yes","No"],opt_val: [0,1]},
				id_64: {quest:"Did Ted and Tracy get engaged too soon?",opt_str: ["Yes","No"],opt_val: [1,0]},
				id_76: {quest:"Was Ian a football player?",opt_str: ["Yes","No"],opt_val: [0,1]},
				id_91: {quest:"Did Jessica use to tease her sister?",opt_str: ["Yes","No"],opt_val: [1,0]},
				id_100: {quest:"Was Eva moving a boat?",opt_str: ["Yes","No"],opt_val: [0,1]},
				id_108: {quest:"Did Arthur shoot a bear?",opt_str: ["Yes","No"],opt_val: [0,1]},
				id_112: {quest:"Did Olivia drop some beans at a party?",opt_str: ["Yes","No"],opt_val: [0,1]},
				id_131: {quest:"Was Chris building a robot?",opt_str: ["Yes","No"],opt_val: [1,0]},
				id_143: {quest:"Did Sally buy some vegetables?",opt_str: ["Yes","No"],opt_val: [0,1]}	
			},
			list_3: {
				id_7: {quest: "Did Alan meet Samantha's parents?",opt_str: ["Yes","No"],opt_val: [1,0]},
				id_24: {quest: "Did Owen eat candles?",opt_str: ["Yes","No"],opt_val: [1,0]},
				id_43: {quest: "Did Frank break his teeth?",opt_str: ["Yes","No"],opt_val: [0,1]},
				id_55: {quest: "Did the clients buy new wheels?",opt_str: ["Yes","No"],opt_val: [0,1]},
				id_65: {quest: "Did Ted jump the rope?",opt_str: ["Yes","No"],opt_val: [0,1]},
				id_77: {quest: "Did the rebels surrender at the end?",opt_str: ["Yes","No"],opt_val: [0,1]},
				id_92: {quest: "Did Jessica pull her sister's arm?",opt_str: ["Yes","No"],opt_val: [0,1]},
				id_101: {quest: "Was Eva rocking a chair?",opt_str: ["Yes","No"],opt_val: [1,0]},
				id_106: {quest: "Did Arthur shoot Julia with a gun?",opt_str: ["Yes","No"],opt_val: [0,1]},
				id_113: {quest: "Did they clean the kitchen?",opt_str: ["Yes","No"],opt_val: [1,0]},
				id_130: {quest: "Did Chris save money for a trip to Italy?",opt_str: ["Yes","No"],opt_val: [1,0]},
				id_142: {quest: "Did the directors like Sally's project?",opt_str: ["Yes","No"],opt_val: [0,1]}
			}
		};
		
		/**----- lists of stim that are linked (same verb) --> that should not be played in the same block **/
		var link_stim = {
			list_1: [['id_8', 'id_10'], ['id_31', 'id_36']], 
			list_2: [['id_9', 'id_11'], ['id_32', 'id_34']], 
			list_3: [['id_7', 'id_12'], ['id_33', 'id_35']]
		};
		
		//----- shuffle function
		/**
		 * Shuffles array in place.
		 * @param {Array} a items An array containing the items.
		 */
		function shuffle (arr) {
			var j, x, index;
			for (index = arr.length - 1; index > 0; index--) {
				j = Math.floor(Math.random() * (index + 1));
				x = arr[index];
				arr[index] = arr[j];
				arr[j] = x;
			}
			return arr;
		}
	
		//----- random draw of the list
		// lists number
		var nb_list = Object.keys(all_stim).length;
		
		// random number
		var irand = Math.floor(Math.random() * nb_list) + 1;
		
		// list name
		var list = 'list_' + irand;
	
		//----- get the associated data
		// stim for list "list"
		var all_stim = all_stim[list];
		
		// total number of stim
		var nstim = all_stim.length;
		
		// number of trials per block
		var ntrial_bk = Math.floor(nstim/nblock);
	
		// check object for the list
		check_obj = check_obj[list];
	
		// stim id with check-point
		var check_id = Object.keys(check_obj);
	
		// total number of check
		var ncheck = check_id.length;
	
		// id of the linked stim
		link_stim = link_stim[list];
	
		// all linked id
		var all_linkid = [].concat.apply([], link_stim);
	
		//----- add stim object indication (check / link)
		// add check and link info
		// !! todo : polyfill for includes (IE...)
		all_stim = all_stim.map(function(xstim){
			if (check_id.includes(xstim.id)){
				xstim.check = 1;
			}else{
				xstim.check = 0;
			}
			if (all_linkid.includes(xstim.id)){
				xstim.link = 1;
			}else{
				xstim.link = 0;
			}
			return xstim;
		});

		// add the check indication for practice items
		practice_items = practice_items.map(function(xstim){
			if (Object.keys(pract_check).includes(xstim.id)){
				xstim.check = 1;
				// add the check parameters
				for (var j in pract_check[xstim.id]){
					xstim[j] = pract_check[xstim.id][j];
				}
			}else{
				xstim.check = 0;
			}
			return xstim;
		});
	
		//----- set the predefine the positions for the check
	
		// number of check point per block
		// should be an integer !
		var ncheck_bk = ncheck/nblock;	
	
		// ipos for check positions in each block
		var posi = Math.floor(ntrial_bk/(ncheck_bk + 1));
		var around = Math.ceil(posi/4);
		
		// get an array from a to b with increment == 1
		function range(a, b){
			var arr = [];		
			for (var i=a; i<b+1; i++){
				arr.push(i);
			}
			return arr;
		}
		
		// randomly draw an element from the array arr 
		function randraw(arr){
			return arr[Math.floor(Math.random() * arr.length)]
		}
		
		// possible +/- delta
		var delta = range(0, around);
		
		// all possible positions for check points
		var posi_check = [];
		for (var i=0; i<nblock; i++){
			var i_start = ntrial_bk*i;
			for (var j=0; j<ncheck_bk; j++){
				// random sign + or -
				var rd_sign = Math.round(Math.random())*2-1;
				// random delta
				var rd_delta = rd_sign*randraw(delta);
				posi_check.push(i_start + posi*(j+1) + rd_delta - 1);
			}
		}
	
		// randomized the checks
		check_id = shuffle(check_id);
		// array of predefined positions
		var predef_pos = posi_check;
		// associated id
		var predef_id = check_id;
	
		// get the block number array
		var block_num_array = function(nblock, ntrialbk){
			var bkpos = new Array(nblock*ntrialbk);
			var k = 0;
			for (var i=0; i<nblock; i++){
				for (var j=0; j<ntrialbk; j++){
					bkpos[k] = i+1;
					k++;
				}
			}
			return bkpos;
		};
	
		// define the middle zones where the linked item position could be selected 
		var middle_pos = function(nblock, ntrialbk, p_bord){
			var n_bord = Math.floor(p_bord*ntrialbk);
			var istart = n_bord;
			var istop = ntrialbk - n_bord -1;
			var allpos = [];
			for (var i=0; i<nblock; i++){
				var shift = ntrialbk * i;
				allpos.push(range(istart+shift, istop+shift));
			}
			return [].concat.apply([], allpos);
		};
	
		// init the available positions in an array with 0 = not available
		// 1 = available
		// midpos, predefpos, blockpos
		var init_availpos = function(nblock, ntrialbk, p_bord, predefpos){
			var blockpos = block_num_array(nblock, ntrialbk);
			var midpos = middle_pos(nblock, ntrialbk, p_bord);
	
			var avail_pos = blockpos.map(function(x){return 0;});
			
			// set avalaible position to 1 in middle zones
			// only if not a predefined position (check point)
			for (var i=0; i<midpos.length; i++){
				var apos = midpos[i];
				if (!predefpos.includes(apos)){
					avail_pos[apos] = 1;
				}
			}
			return {bk_num: blockpos, av_pos: avail_pos};
		};
	
		// sort the id so that if there is check it will appear in forst position
		function sort_id(idarr, checkid){
			for (var i=0; i<idarr.length; i++){
				if (checkid.indexOf(idarr[i]) >= 0){
					var tmp = idarr[0];
					idarr[0] = idarr[i];
					idarr[i] = tmp;
					break;
				}
			}
			return idarr;
		}
	
		// disable the block where the check stands
		function disable_block(opos, predef_id, predef_pos, id){
			var ich = predef_pos[predef_id.indexOf(id)];
			// associated block number
			var bk_chk = opos.bk_num[ich];
			// disable position that falls inside the block containing the check
			opos.av_pos = opos.av_pos.map(function(p, idx){
				if (opos.bk_num[idx]==bk_chk){
					p = 0;
				}
				return p;
			});
			return opos;
		}
	
		// list of avalaible block
		function avalaible_block(opos){
			var np = opos.bk_num.length;
			var av_bk = [];
			for (var i=0; i<np; i++){
				if (opos.av_pos[i]==1){
					if (!av_bk.includes(opos.bk_num[i])){
						av_bk.push(opos.bk_num[i]);
					}
				}
			}
			return av_bk;
		}
	
		// get the random position amongst the available ones
		function get_position(opos, bknum){
			var av_bk_pos = [];
			var np = opos.bk_num.length;
			for (var i=0; i<np; i++){
				if (opos.bk_num[i]==bknum && opos.av_pos[i]==1){
					av_bk_pos.push(i);
				}
			}
			return randraw(av_bk_pos);
		}
	
		//--- set the predefined positions for the linked items
		for (var i=0; i<link_stim.length; i++){
			var lid = sort_id(link_stim[i], check_id);
			// check if enough blocks exist
			var nlid = lid.length;
			if (nlid > nblock){
				// need to make fake blocks
				var ntr = Math.floor(nstim/nlid);
				var opos = init_availpos(nlid, ntr, 0.3, predef_pos);
			}else{
				var opos = init_availpos(nblock, ntrial_bk, 0.3, predef_pos);
			}
			// if one element is a check --> position already predefined
			if (predef_id.includes(lid[0])){
				opos = disable_block(opos, predef_id, predef_pos, lid[0]);
				// remove the check element from the id list
				lid = lid.slice(1);
			}
			// now, select the linked item position
			// avalaible blocks
			var av_bk = shuffle(avalaible_block(opos));
			for (var k=0; k<lid.length; k++){
				var ipos = get_position(opos, av_bk[k]);
				predef_id.push(lid[k]);
				predef_pos.push(ipos);
			}
		}
	
		// make the pseudo-randomisation of the stim
		// only stim
		var stim = shuffle(all_stim.filter(function(x){ return !x.check && !x.link}));
		var remstim = all_stim.filter(function(x){ return x.check || x.link});
		var rnd_stim = [];
		var k = 0;
		for (var i=0; i<nstim; i++){
			if (predef_pos.includes(i)){
				var rid = predef_id[predef_pos.indexOf(i)];
				var rstim = remstim.filter(function(x) { return x.id==rid});
				rstim = rstim[0];
				// add the associated check parameters
				if (rstim.check){
					var chk = check_obj[rstim.id];
					for (var j in chk){
						rstim[j] = chk[j];
					}
				}
				rnd_stim.push(rstim);
			} else {
				rnd_stim.push(stim[k]);
				k++;
			}
		}
	
		// define the self-pace stim blocks
		var stim_block = [];
		for (var i=0; i<nblock; i++){
			var istart = i*ntrial_bk;
			var istop = istart + ntrial_bk;
			stim_block.push(rnd_stim.slice(istart, istop));
		}
	
		return {list: list, full: stim_block, example: practice_items};
	}
	/* ------------------------- General overview */
	function define_form_blocks(){

		var demographic = [
			{
				type: "list",
				id: "age",
				quest: "How old are you?",
				opt_str: ["18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30", "31", "32", "33", "34", "35", "36", "37", "38", "39", "40", "41", "42", "43", "44", "45", "46", "47", "48", "49", "50", "51", "52", "53", "54", "55", "56", "57", "58", "59", "60", "61", "62", "63", "64", "65", "66", "67", "68", "69", "70", "71", "72", "73", "74", "75", "76", "77", "78", "79", "80", "81", "82", "83", "84", "85", "86", "87", "88", "89", "90", "91", "92", "93", "94", "95", "96", "97", "98", "99", "100", "101", "102", "103", "104", "105"],
				opt_id: ["18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30", "31", "32", "33", "34", "35", "36", "37", "38", "39", "40", "41", "42", "43", "44", "45", "46", "47", "48", "49", "50", "51", "52", "53", "54", "55", "56", "57", "58", "59", "60", "61", "62", "63", "64", "65", "66", "67", "68", "69", "70", "71", "72", "73", "74", "75", "76", "77", "78", "79", "80", "81", "82", "83", "84", "85", "86", "87", "88", "89", "90", "91", "92", "93", "94", "95", "96", "97", "98", "99", "100", "101", "102", "103", "104", "105"],
				required: 1
			}, 
			{
				type: "radio",
				id: "gender",
				quest: "What is your gender?",
				opt_str: ["M", "F", "Other"],
				opt_id: ["m", "f", "o"],
				required: 1
			}, 
			{
				type: "list",
				id: "degree",
				quest: "What is the highest degree or level of education you have completed?",
				opt_str: ["High School Diploma","Bachelor's Degree","Master's Degree","Ph.D. or higher","Trade School","Apprenticeship","Other"],
				opt_id: ["HighS", "BS", "MS", "PHD", "TradeSchool", "Apprendiceship", "other"],
				required: 1
			}, 
			{
				type: "text",
				id: "degree_oth",
				quest: "If other, please specify:",
				input_nchar: 20,
				visible_if: ["degree_other"],
				required: 1
			}, 
			{
				type: "list",
				id: "impairment",
				quest: "Have you been diagnosed with Dyslexia, Dyspraxia or ADHD, or aware of having any related language disorders?",
				opt_str: ["No", "Yes"],
				opt_id: ["no", "yes"],
				required: 1
			},      
			{
				type: "text",
				id: "impairment_other",
				quest: "If yes, please indicate:",
				input_nchar: 20,
				visible_if: ["impairment_yes"],
				required: 1
			},
			{
				type: "radio",
				id: "born",
				quest: "Where were you born?",
				opt_str: ["United States of America","Canada", "other"],
				opt_id: ["usa", "canada", "ot"],
				required: 1
			},
			{
				type: "text",
				id: "bornoth",
				quest: "If other, please indicate:",
				input_nchar: 20,
				visible_if: ["born_ot"],
				required: 1
			}];

		var lang = [
			{
				type: "radio",
				id: "lang_nat",
				quest: "What is your first language?",
				opt_str: ["English", "other"],
				opt_id: ["en", "ot"],
				required: 1
			}, 
			{
				type: "text",
				id: "lang_natoth",
				quest: "If other, please indicate:",
				input_nchar: 20,
				visible_if: ["lang_nat_ot"],
				required: 1
			},
			{
				type: "list",
				id: "mono",
				quest: "Were you raised monolingual?",
				opt_str: ["I was raised with my native language only", "I was raised with two or more languages"],
				opt_id: ["yes", "no"],
				required: 1
			}, 
			{
				type: "text",
				id: "monooth",
				quest: "Please, specify the list of languages (separated by a comma):",
				input_nchar: 20,
				visible_if: ["mono_no"],
				required: 1
			},
			{
				type: "list",
				id: "country_raised",
				quest: "Where did you spend most of your time before you turned 18?",
				opt_str: ["In the same country I was born", "Outside the coutry I was born"],
				opt_id: ["in", "out"],
				required: 1
			}, 
			{
				type: "text",
				id: "country_raised_out",
				quest: "Please specify which country:",
				input_nchar: 20,
				visible_if: ["country_raised_out"],
				required: 1
			},
			{
				type: "list",
				id: "fluent_lang",
				quest: "Are you fluent only in English? Or are you also fluent in any other language(s)?",
				opt_str: ["I only know English", "I know other languages in addition to English"],
				opt_id: ["yes", "no"],
				required: 1
			},
			{
				type: "text",
				id: "fluent_langoth",
				quest: "List all the other languages you can speak and understand in order of fluency:",
				input_nchar: 20,
				visible_if: ["fluent_lang_no"],
				required: 1
			}
		];
	
		var reading = [
			{
				type: "list",
				id: "book",
				quest: "Do you often read books?",
				opt_str: ["Almost never", "A few times a year", "A few times a month", "At least once a week", "One or more times a day"],
				opt_id: ["1", "2", "3", "4", "5"],
				required: 1
			}, 
			{
				type: "list",
				id: "newspaper",
				quest: "Do you often read newspapers and/or magazines?",
				opt_str:  ["Almost never", "A few times a year", "A few times a month", "At least once a week", "One or more times a day"],
				opt_id: ["1", "2", "3", "4", "5"],
				required: 1
			}
		];
		var exp_problem = [
			{
			type: "radio",
			id: "exp_prob",
			quest: "Did you encounter any problems during this experiment?",
			opt_str : ["yes", "no"],
			opt_id : ["yes", "no"]
			},
			{
			type: "text",
			id: "exp_prob_which",
			quest: "Which problems?",
			input_nchar: 50,
			visible_if : ["exp_prob_yes"]
			}
		];
	
		/* ================= Big form object */	
		//var iniarr = [];
		var hf_form = [
			{
				preamble: '<p class="green">A few final questions:</p>',
				elements: demographic
			},
			{
				preamble: '<p>About your language(s):</p>',
				elements: lang
			},
			{
				preamble: '<p>About your reading habits, ' +
						'select the answer that best fits you:</p>',
				elements: reading
			},
			{
				preamble: "Lastly :",
				elements: exp_problem
			}
		];
			
		/*** Define ALL FORM BLOCKS*/
	
		var Npages = hf_form.length;
		var form_blocks = new Array(Npages);
		for (var i = 0; i < Npages ; i++) {
			
			form_blocks[i] = {
				type: "form",
				preamble: hf_form[i].preamble,
			//	progbar: false, //pbar,
				form_struct: hf_form[i].elements,
				submit: "Next"
			};
		}	
		form_blocks[Npages-1]["submit"] = "Final validation !";
		return form_blocks;
	};