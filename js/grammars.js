/**
 * @author charisse
 */

var grammars = {
    valentine : {
        origin : ["I #verb1# you like #adv.a# #adj# #noun#.", "I will always #verb1# you like #adj.a# #noun#.", "Do you really #verb1# me, like #adj.a# #noun#?",
    "I'll #verb2# you like #adj.a# #noun#.", "Will you #verb2# me like #adv.a# #adj# #noun#?", "Even if you were #adj.a# #noun#, I'd still #verb2# you.", 
    "If you were #adj.a# #noun#, I'd be #adv.a# #adj# #noun#.", "Will you be my #adj# #noun#?", "Let me be your #adj# #noun# forever.",
"To be mine, you must be as #adj2# as #adj.a# #noun#.", "For you, I will be as #adj2# as #adj.a# #noun#."],
        verb1 :   ["long for", "love", "trust", "adore", "cherish", "admire", "need", "treasure", "value", "want"],
        verb2 :   ["dance with", "carry", "worship", "care for", "support", "embrace", "delight in", "entice", "do anything for", "cook for", "massage", "caress"],
        adv : ["perfectly", "absolutely", "entirely", "ridiculously", "blissfully", "dreamily", "diligently", "extremely", "keenly", "eternally", "hopelessly", "suspiciously", "loyally", "solemnly", "swiftly", "valiantly"],
        adj : "mad crazy tranquil insane deranged foolish irrational calm sensible pragmatic indignant passionate wistful eager beautiful dazzling elegant muscular unsightly polite witty bewildered agreeable alert bewildered brainy charming exuberant hungry filthy inquisitive innocent grumpy obedient outrageous thoughtful wide-eyed weary wild".split(" "),
        adj2 : "swift strong fit quick fast fierce wise brave kind mysterious".split(" "),
        noun : ["#animal#", "#nature#", "#object#", "#drink#"],
        animal : "baboon bear camel donkey fox horse cow giraffe cat mouse monkey gorilla lion hedgehog lemur toad sardine pigeon squid oyster cuttlefish".split(" "),
        nature : "cloud island rock mountain hill lake valley river whirlpool plant cactus flower tree forest".split(" "),
        object : "chair table bathtub cupboard wall sofa door cushion bottle curtain cup plate bowl cabinet bookcase desk kettle".split(" "),
        drink : ["kopi-O", "teh tarik", "cup of chamomile tea", "glass of wine", "shot of vodka", "cup of Milo", "cup of bubble tea", "can of beer"],
    }
}
