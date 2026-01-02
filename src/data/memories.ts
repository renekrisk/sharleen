export interface Memory {
    id: string;
    imageUrl: string;
    reason: string;
    intro: string;
    verse: string;
}

const rawContent = [
    {
        reason: "I love how you feel deeply and still stay kind",
        intro: "It’s one of the things I admire most about you.",
        verse: "Whatever our souls are made of, his and mine are the same.\n— Emily Brontë"
    },
    {
        reason: "I love how you don’t fake strength, you actually have it",
        intro: "You are the strongest person I know, in the quietest way.",
        verse: "Love gives you strength you never knew you had and courage you never knew you needed.\n— Maya Angelou"
    },
    {
        reason: "I love how you’re gentle without being weak",
        intro: "Your gentleness is your power.",
        verse: "Love, like rain, does not choose the grass on which it falls.\n— African Proverb"
    },
    {
        reason: "I love how you care in quiet ways",
        intro: "I see every little thing you do.",
        verse: "I closed my mouth and spoke to you in a hundred silent ways.\n— Rumi"
    },
    {
        reason: "I love how you think before you speak",
        intro: "Your words always carry so much weight.",
        verse: "Words are like a light in the window of the soul.\n— Unknown"
    },
    {
        reason: "I love how you try to understand instead of react",
        intro: "You have such a beautiful, patient heart.",
        verse: "Love is the bridge between you and everything.\n— Rumi"
    },
    {
        reason: "I love how you don’t dismiss emotions, even uncomfortable ones",
        intro: "You make me feel so safe to be myself.",
        verse: "The soul that can speak through the eyes can also kiss with a gaze.\n— Gustavo Adolfo Bécquer"
    },
    {
        reason: "I love how you sit with sadness instead of running from it",
        intro: "You aren't afraid of the dark, and that helps me.",
        verse: "Where there is love, there is no darkness.\n— African Proverb"
    },
    {
        reason: "I love how you love softly",
        intro: "It’s like a warm hum in the background of my life.",
        verse: "To be in love is to touch with a lighter hand.\n— Gwendolyn Brooks"
    },
    {
        reason: "I love how you don’t need to be loud to be felt",
        intro: "Your presence is my anchor.",
        verse: "You dance inside my chest where no one sees you, but sometimes I do.\n— Rumi"
    },
    {
        reason: "I love how you’re thoughtful",
        intro: "You always remember the things that matter.",
        verse: "Love recognizes no barriers. It jumps hurdles, leaps fences.\n— Maya Angelou"
    },
    {
        reason: "I love how you notice details other people miss",
        intro: "You see the world so beautifully.",
        verse: "He stepped down, trying not to look long at her, as if she were the sun, yet he saw her, like the sun, even without looking.\n— Leo Tolstoy"
    },
    {
        reason: "I love how you remember small things",
        intro: "It makes me feel so seen.",
        verse: "Just in case you ever foolishly forget; I'm never not thinking of you.\n— Virginia Woolf"
    },
    {
        reason: "I love how you check in",
        intro: "It’s the best part of my day.",
        verse: "To be loved is to be useful to someone else.\n— Victor Hugo"
    },
    {
        reason: "I love how you worry about hurting people",
        intro: "You have such a delicate conscience.",
        verse: "Love is an irresistible desire to be irresistibly desired.\n— Robert Frost"
    },
    {
        reason: "I love how your empathy is real, not performative",
        intro: "You feel things with people, not just for them.",
        verse: "Who, being loved, is poor?\n— Oscar Wilde"
    },
    {
        reason: "I love how you don’t use love as a weapon",
        intro: "Your love is a gift, never a transaction.",
        verse: "Love is not affectionate feeling, but a steady wish for the loved person's ultimate good.\n— C.S. Lewis"
    },
    {
        reason: "I love how you choose patience even when it’s hard",
        intro: "I know it isn't always easy, and I thank you for it.",
        verse: "Fate brings people together no matter how far apart they may be.\n— Chinese Proverb"
    },
    {
        reason: "I love how you don’t rush people’s processes",
        intro: "You give me the room I need to grow.",
        verse: "Grow old along with me! The best is yet to be.\n— Robert Browning"
    },
    {
        reason: "I love how you allow space",
        intro: "I never feel crowded, just cared for.",
        verse: "Your breast is enough for my heart, and my wings for your freedom.\n— Pablo Neruda"
    },
    {
        reason: "I love how you’re emotionally honest",
        intro: "I always know where I stand with you.",
        verse: "Doubt thou the stars are fire... But never doubt I love.\n— William Shakespeare"
    },
    {
        reason: "I love how you admit when you’re scared",
        intro: "That is the bravest thing you do.",
        verse: "In your light I learn how to love.\n— Rumi"
    },
    {
        reason: "I love how you don’t pretend to have it all together",
        intro: "I love the real you, even the messy parts.",
        verse: "I love you as certain dark things are to be loved, in secret, between the shadow and the soul.\n— Pablo Neruda"
    },
    {
        reason: "I love how you still show up even when you’re tired",
        intro: "You give so much of yourself.",
        verse: "Being with you feels like home.\n— Unknown"
    },
    {
        reason: "I love how you don’t give up easily",
        intro: "You are the steady beat of my life.",
        verse: "Omnia vincit amor, et nos cedamus amori.\n— Virgil"
    },
    {
        reason: "I love how you’re resilient without becoming cold",
        intro: "You’ve been through a lot, but you’re still so warm.",
        verse: "A life without love is like a year without summer.\n— Lithuanian Proverb"
    },
    {
        reason: "I love how you stay soft in a hard world",
        intro: "It’s a rare type of courage.",
        verse: "I love you straightforwardly, without complexities or pride.\n— Pablo Neruda"
    },
    {
        reason: "I love how you don’t lose your tenderness",
        intro: "Your hands always feel like home.",
        verse: "Love is like a baby; it needs to be treated tenderly.\n— Yoruba Proverb"
    },
    {
        reason: "I love how you still believe in love",
        intro: "Your hope is contagious.",
        verse: "What a terrifyingly beautiful thought that you are the beginning of forever.\n— Kamand Kojouri"
    },
    {
        reason: "I love how you protect your heart but still open it",
        intro: "I’m so lucky you chose to open it for me.",
        verse: "I carry your heart with me (I carry it in my heart).\n— E.E. Cummings"
    },
    {
        reason: "I love how you’re sincere",
        intro: "You mean every single word.",
        verse: "If I were to live a thousand years, I would belong to you for all of them.\n— Cassandra Clare"
    },
    {
        reason: "I love how you don’t play games with feelings",
        intro: "It’s so refreshing to be with someone so real.",
        verse: "You pierce my soul. I am half agony. Half hope.\n— Jane Austen"
    },
    {
        reason: "I love how you don’t manipulate",
        intro: "I trust you with my whole life.",
        verse: "I am yours. Don't give myself back to me.\n— Rumi"
    },
    {
        reason: "I love how you’re clear about what you feel",
        intro: "You make it so easy to love you.",
        verse: "My heart is, and always will be, yours.\n— Jane Austen"
    },
    {
        reason: "I love how you’re brave enough to care",
        intro: "Caring is a risk, and you take it every day.",
        verse: "To love another person is to see the face of God.\n— Victor Hugo"
    },
    {
        reason: "I love how you don’t hide behind indifference",
        intro: "You are all in, and it’s beautiful.",
        verse: "Tell me every terrible thing you ever did, and let me love you anyway.\n— Kamand Kojouri"
    },
    {
        reason: "I love how you let yourself feel joy fully",
        intro: "Your laugh is infectious.",
        verse: "Soul meets soul on lovers' lips.\n— Percy Bysshe Shelley"
    },
    {
        reason: "I love how you let yourself feel pain honestly",
        intro: "It shows how much your heart is truly capable of.",
        verse: "Love is so short, forgetting is so long.\n— Pablo Neruda"
    },
    {
        reason: "I love how you don’t shame vulnerability",
        intro: "You’ve taught me that being open is being strong.",
        verse: "Each time you happen to me all over again.\n— Edith Wharton"
    },
    {
        reason: "I love how you respect emotional boundaries",
        intro: "You always honor the person I am.",
        verse: "Love — is anterior to Life — Posterior — to Death.\n— Emily Dickinson"
    },
    {
        reason: "I love how you’re supportive without being controlling",
        intro: "You empower me every day.",
        verse: "Let the beauty of what you love be what you do.\n— Rumi"
    },
    {
        reason: "I love how you encourage growth",
        intro: "You make me want to be better.",
        verse: "Gratitude is the heart's memory.\n— French Proverb"
    },
    {
        reason: "I love how you want the best for people",
        intro: "You have such a generous soul.",
        verse: "Where there is love, there is happiness.\n— Polish Proverb"
    },
    {
        reason: "I love how you celebrate others quietly",
        intro: "You don't need the credit, you just want them to be happy.",
        verse: "You have bewitched me, body and soul.\n— Jane Austen"
    },
    {
        reason: "I love how you don’t compete",
        intro: "You lead with love, not ego.",
        verse: "I like myself better when I'm with you.\n— Mitch Albom"
    },
    {
        reason: "I love how you don’t compare yourself to others",
        intro: "You are an original in a world of copies.",
        verse: "Love is like the wind, you can't see it, but you can feel it.\n— Nicholas Sparks"
    },
    {
        reason: "I love how you’re content being yourself",
        intro: "It’s so attractive to see you so grounded.",
        verse: "You are my sun, my moon, and all my stars.\n— E.E. Cummings"
    },
    {
        reason: "I love how you’re grounded",
        intro: "You keep me steady when the world gets loud.",
        verse: "For thy sweet love remembered such wealth brings.\n— William Shakespeare"
    },
    {
        reason: "I love how you feel real",
        intro: "There’s no filter with you, and I love that.",
        verse: "I'm in love with you... and I'm not in the business of denying myself.\n— John Green"
    },
    {
        reason: "I love how you don’t try too hard",
        intro: "The best things about you are effortless.",
        verse: "I will follow you to the ends of the earth.\n— Sylvia Plath"
    },
    {
        reason: "I love how you carry love gently",
        intro: "It’s a light touch that changes everything.",
        verse: "My heart is ever at your service.\n— William Shakespeare"
    },
    {
        reason: "I love how you don’t rush affection",
        intro: "You let things happen in their own perfect time.",
        verse: "Doubt truth to be a liar; But never doubt I love.\n— William Shakespeare"
    },
    {
        reason: "I love how you value connection",
        intro: "You treat people like they truly matter.",
        verse: "You should be kissed and often, and by someone who knows how.\n— Margaret Mitchell"
    },
    {
        reason: "I love how you listen with your whole attention",
        intro: "When I’m with you, I feel like the only person in the world.",
        verse: "Love seeks not itself to please... But for another gives its ease.\n— William Blake"
    },
    {
        reason: "I love how you make people feel seen",
        intro: "That is your greatest gift.",
        verse: "Shall I compare thee to a summer's day?\n— William Shakespeare"
    },
    {
        reason: "I love how you make people feel safe",
        intro: "I always feel protected by your side.",
        verse: "He was my North, my South, my East and West.\n— W.H. Auden"
    },
    {
        reason: "I love how you’re careful with hearts",
        intro: "You know how much they weigh.",
        verse: "Doubt truth to be a liar; But never doubt I love.\n— Shakespeare"
    },
    {
        reason: "I love how you don’t take love lightly",
        intro: "You know it’s the most important thing we have.",
        verse: "The moon glows like phosphorous on the vagrant waters.\n— Pablo Neruda"
    },
    {
        reason: "I love how you are exactly who you are",
        intro: "And I wouldn’t have it any other way.",
        verse: "I am theirs. Don't give myself back to me.\n— Rumi"
    },
    {
        reason: "I love how you are you, without effort",
        intro: "Simply and completely.",
        verse: "Love alters not with his brief hours and weeks.\n— William Shakespeare"
    },
    {
        reason: "I love how you ask if I'm okay",
        intro: "You notice the subtle shifts in me.",
        verse: "To be in love is to be well.\n— Gwendolyn Brooks"
    },
    {
        reason: "I love how you walk through the world",
        intro: "You have a grace that I always admire.",
        verse: "A heart that loves is always young.\n— Ethiopian Proverb"
    },
    {
        reason: "I love how you find the light",
        intro: "Even in the darkest times, you find a way.",
        verse: "The world is full of magical things.\n— W.B. Yeats"
    },
    {
        reason: "I love how you keep the peace",
        intro: "You prioritize harmony over being right.",
        verse: "Tiha. (My soul loves you.)\n— Dakota"
    },
    {
        reason: "I love how you speak your truth",
        intro: "It’s one of the things I respect most about you.",
        verse: "If you love someone, you love the wind that blows around them.\n— Swahili Proverb"
    },
    {
        reason: "I love how you notice the moon",
        intro: "You see the magic in the everyday.",
        verse: "Love is like a river; it never runs dry.\n— Shona Proverb"
    },
    {
        reason: "I love how you hold space for me",
        intro: "You let me be exactly who I am.",
        verse: "With love, water is enough.\n— Chinese Proverb"
    },
    {
        reason: "I love how you choose the hard path when it's right",
        intro: "Integrity is your middle name.",
        verse: "Hold your hand, and grow old with you.\n— Chinese Proverb"
    },
    {
        reason: "I love how you remember what I need",
        intro: "Sometimes you know before I do.",
        verse: "You're the poetry.\n— K.K."
    },
    {
        reason: "I love how you are patient with my silence",
        intro: "You don't feel the need to fill it.",
        verse: "Ya'aburnee. (You bury me.)\n— Arabic"
    },
    {
        reason: "I love how you protect your joy",
        intro: "It's a beautiful thing to witness.",
        verse: "To love or have loved, that is enough.\n— Victor Hugo"
    },
    {
        reason: "I love how you stay curious",
        intro: "You never stop wondering about the world.",
        verse: "Love is the poetry of the heart.\n— Anonymous"
    },
    {
        reason: "I love how you handle the rain",
        intro: "You find the beauty in the storms.",
        verse: "In a world full of temporary things, you are my forever.\n— Unknown"
    },
    {
        reason: "I love how you value the small things",
        intro: "Because you know they’re the real things.",
        verse: "Today I choose you, and every day after.\n— Unknown"
    },
    {
        reason: "I love how you give without keeping score",
        intro: "Your generosity is boundless.",
        verse: "Love is not just a word, it's a promise.\n— Unknown"
    },
    {
        reason: "I love how you stay true to your roots",
        intro: "You know exactly where you come from.",
        verse: "You are my today, my tomorrow, and my forever.\n— Unknown"
    },
    {
        reason: "I love how you face the mirror with grace",
        intro: "You are beautiful, inside and out.",
        verse: "Love transforms fear into faith.\n— Unknown"
    },
    {
        reason: "I love how you are my favorite person",
        intro: "There’s no one else I’d rather be with.",
        verse: "Soul meets soul on lovers' lips.\n— Percy Bysshe Shelley"
    },
    {
        reason: "I love how you make everything better",
        intro: "Just by being there.",
        verse: "My heart is, and always will be, yours.\n— Jane Austen"
    },
    {
        reason: "i love how you love it when i call you princess",
        intro: "It’s my favorite nickname for you.",
        verse: "You are the queen. There are taller than you...\n— Pablo Neruda"
    }
];

const imagePaths = [
    "PHOTO-2025-10-29-18-07-16.jpg", "PHOTO-2025-11-02-15-51-57.jpg", "PHOTO-2025-11-02-15-51-58 2.jpg",
    "PHOTO-2025-11-02-15-51-58.jpg", "PHOTO-2025-11-04-16-22-00.jpg", "PHOTO-2025-11-04-16-22-01 2.jpg",
    "PHOTO-2025-11-04-16-22-01.jpg", "PHOTO-2025-11-09-00-43-46.jpg", "PHOTO-2025-11-09-15-50-21.jpg",
    "PHOTO-2025-11-09-16-09-16 (1).jpg", "PHOTO-2025-11-09-16-11-05.jpg", "PHOTO-2025-11-09-16-11-12.jpg",
    "PHOTO-2025-11-10-20-07-06.jpg", "PHOTO-2025-11-10-20-07-07.jpg", "PHOTO-2025-11-11-14-49-23 2.jpg",
    "PHOTO-2025-11-11-14-49-23.jpg", "PHOTO-2025-11-16-09-27-57.jpg", "PHOTO-2025-11-16-17-46-35 2.jpg",
    "PHOTO-2025-11-16-17-46-35.jpg", "PHOTO-2025-11-16-17-46-36 2.jpg", "PHOTO-2025-11-16-17-46-36.jpg",
    "PHOTO-2025-11-19-20-53-13.jpg", "PHOTO-2025-11-23-14-54-45.jpg", "PHOTO-2025-11-23-14-54-46.jpg",
    "PHOTO-2025-11-23-14-54-47.jpg", "PHOTO-2025-11-23-14-54-48.jpg", "PHOTO-2025-11-23-14-54-50 2.jpg",
    "PHOTO-2025-11-23-14-54-50.jpg", "PHOTO-2025-11-23-14-54-51 2.jpg", "PHOTO-2025-11-23-14-54-51 3.jpg",
    "PHOTO-2025-11-23-14-54-51 4.jpg", "PHOTO-2025-11-23-14-54-51.jpg", "PHOTO-2025-11-23-14-54-52 2.jpg",
    "PHOTO-2025-11-23-14-54-52 3.jpg", "PHOTO-2025-11-23-14-54-52 4.jpg", "PHOTO-2025-11-23-14-54-52 5.jpg",
    "PHOTO-2025-11-23-14-54-52.jpg", "PHOTO-2025-11-23-14-54-53.jpg", "PHOTO-2025-11-23-14-54-54.jpg",
    "PHOTO-2025-11-23-14-54-55.jpg", "PHOTO-2025-11-23-14-54-56.jpg", "PHOTO-2025-11-23-14-54-59.jpg",
    "PHOTO-2025-11-23-14-55-00.jpg", "PHOTO-2025-11-23-14-55-01.jpg", "PHOTO-2025-11-23-14-55-02 2.jpg",
    "PHOTO-2025-11-23-14-55-02 3.jpg", "PHOTO-2025-11-23-14-55-02.jpg", "PHOTO-2025-11-30-11-16-46.jpg",
    "PHOTO-2025-11-30-11-19-15.jpg", "PHOTO-2025-11-30-21-25-41.jpg", "PHOTO-2025-11-30-21-25-42.jpg",
    "PHOTO-2025-11-30-21-25-47.jpg", "PHOTO-2025-12-21-10-40-58.jpg", "PHOTO-2025-12-21-10-49-52 2.jpg",
    "PHOTO-2025-12-21-10-49-52.jpg", "PHOTO-2025-12-21-11-08-02.jpg", "PHOTO-2025-12-21-11-08-10.jpg",
    "PHOTO-2025-12-22-14-06-18 2.jpg", "PHOTO-2025-12-22-14-06-18.jpg", "PHOTO-2025-12-25-10-46-47.jpg",
    "PHOTO-2025-12-25-10-52-25.jpg", "PHOTO-2025-12-25-13-37-56 2.jpg", "PHOTO-2025-12-25-13-37-56.jpg",
    "PHOTO-2025-12-25-13-37-57.jpg", "PHOTO-2025-12-25-14-35-43.jpg", "PHOTO-2025-12-25-14-35-44.jpg",
    "PHOTO-2025-12-25-14-36-32 2.jpg", "PHOTO-2025-12-25-14-36-32.jpg", "PHOTO-2025-12-25-14-36-40.jpg",
    "PHOTO-2025-12-25-14-36-42.jpg", "PHOTO-2025-12-28-10-27-07 2.jpg", "PHOTO-2025-12-28-10-27-07 3.jpg",
    "PHOTO-2025-12-28-10-27-07 4.jpg", "PHOTO-2025-12-28-10-27-07.jpg", "PHOTO-2025-12-28-10-27-08.jpg"
];

export const memories: Memory[] = rawContent.map((m, index) => ({
    id: String(index + 1),
    imageUrl: `/images/${imagePaths[index % imagePaths.length]}`,
    reason: m.reason,
    intro: m.intro,
    verse: m.verse
}));
