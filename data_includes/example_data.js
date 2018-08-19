var shuffleSequence = seq("trial");
PennController.ResetPrefix(null);

var items = [
    // The rating trial
    ["trial", "PennController", PennController(
        newText("A's line", "A - Do you want either tea or coffee?")
            .print()
        ,
        newText("B's line", "B - I'll have both, thanks.")
            .print()
        ,
        newText("question", "How natural do you find B's answer?")
            .settings.italic()
            .settings.center()
            .print()
        ,
        newScale("answer",    "Unnatural", "So-so...", "Natural")
            .settings.radio()
            .settings.labels("bottom")
            .settings.center()
            .print()
            .wait()
        ,
        newButton("validate score", "Click here to validate")
            .settings.center()
            .print()
            .wait()
    )]
    ,
    // The input trial
    ["trial", "PennController", PennController(
        newText("warning input", "Please enter some text before validating")
            .settings.bold()
            .settings.italic()
            .settings.color("red")
        ,
        newText("Instruction", "Please fill the box below to create a sentence that you find natural.")
            .settings.italic()
            .print()
        ,
        newTextInput("warm alternative")
            .settings.before( newText("before", "I thought the weather was warm, but it really is ") )
            .print()
        ,
        newButton("validate input", "Click here to validate")
            .settings.center()
            .print()
            .wait(
                getTextInput("warm alternative")
                    .testNot.text("")
                    .failure( getText("warning input").print() )
            )
    )]
];
