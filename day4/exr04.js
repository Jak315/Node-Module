// 3 тооны нийлбэрийг хасаад буцаадаг JS функц бичээд түүнийгээ ашиглана уу. Үр дүнг Screen Shot хийгээд энэ дасгалд Attach хийнэ үү.
> function (a, b, c) {
    function(a, b, c) {
    ^^^^^^^^

            Uncaught SyntaxError: Function statements require a function name
    > 
    > function (a, b, c) a - b - c
        function(a, b, c) a - b - c
            ^^^^^^^^

            Uncaught SyntaxError: Function statements require a function name
    > function (a, b, c) { a - b - c }
        function(a, b, c) { a - b - c }
    ^^^^^^^^

            Uncaught SyntaxError: Function statements require a function name
    > function minus((a, b, c){ a - b - c });
        function minus((a, b, c){ a - b - c });
                   ^

            Uncaught SyntaxError: Unexpected token '('
                > function minus(a, b, c{ a- b - c
    });
    function minus(a, b, c{ a-b - c
});
                        ^

    Uncaught SyntaxError: Unexpected token '{'
        > function minus(a, b, c) {retur n(a - b - c) }
function minus(a, b, c) {retur n(a - b - c) }
                                ^

    Uncaught SyntaxError: Unexpected identifier
        > function minus(a, b, c)
    ... {
    ... reurn a - b - c
}
    reurn a - b - c}
          ^

    Uncaught SyntaxError: Unexpected identifier
        > {
        ... return a - b - c
    }
return a - b - c})
           ^

    Uncaught SyntaxError: Unexpected identifier
        > function minus(a, b, c)
    ... { 
    ... return a - b - c
}
undefined
    > minus(3, 2, 1)
0
    > minus(5, 2, 1)
2
    > 