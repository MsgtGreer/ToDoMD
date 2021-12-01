import SuggestionProvider from "./provider";
import {EditorSuggestContext} from "obsidian";

function countDollarSigns(str: string): number {
    let count = 0;
    let wasDollar = false;
    for (let i = 0; i < str.length; i++) {
        if (str.charAt(i) === "$") {
            if (!wasDollar) count++;
            wasDollar = !wasDollar;
        } else {
            wasDollar = false;
        }
    }

    return count;
}

function substringUntil(str: string, delimiter: string): string {
    let index = str.indexOf(delimiter);
    if(index === -1)
        return str;

    return str.substring(0, index);
}

class LatexSuggestionProvider implements SuggestionProvider {
    getSuggestions(context: EditorSuggestContext): string[] {
        let editor = context.editor;

        let countBefore = countDollarSigns(
            editor.getRange({line: 0, ch: 0}, context.start)
        );

        //Check if we're in a LaTeX context
        if (countBefore % 2 !== 1)
            return [];

        //This makes sure that matches like "\vee" are ranked before "\curlyvee" if the query is "\vee"
        return LATEX_COMMANDS.filter((s) => s.contains(context.query))
            .map((s) => ({
                s: s,
                priority: s.indexOf(context.query),
            }))
            .sort((a, b) => {
                let val = a.priority - b.priority;
                if (val == 0)
                    val = substringUntil(a.s, "{").length - substringUntil(b.s, "{").length;
                return val;
            })
            .map((t) => t.s);
    }
}

export const Latex = new LatexSuggestionProvider();

const LATEX_COMMANDS = [
    "\\above #",
    "\\verb|#|",
    "\\left\\",
    "\\right\\",
    "\\acute{#}",
    "\\aleph",
    "\\alpha",
    "\\amalg",
    "\\And",
    "\\angle",
    "\\approx",
    "\\approxeq",
    "\\arccos",
    "\\arcsin",
    "\\arctan",
    "\\arg",
    "\\array{#}",
    "\\arrowvert",
    "\\Arrowvert",
    "\\ast",
    "\\asymp",
    "\\atop",
    "\\backepsilon",
    "\\backprime",
    "\\backsim",
    "\\backsimeq",
    "\\backslash",
    "\\bar{#}",
    "\\barwedge",
    "\\Bbb{#}",
    "\\Bbbk",
    "\\bbFont",
    "\\bbox{#}",
    "\\bcancel{#}",
    "\\because",
    "\\beta",
    "\\beth",
    "\\between",
    "\\bf",
    "\\bigcap",
    "\\bigcirc",
    "\\bigcup",
    "\\bigodot",
    "\\bigoplus",
    "\\bigotimes",
    "\\bigsqcup",
    "\\bigstar",
    "\\bigtimes",
    "\\bigtriangledown",
    "\\bigtriangleup",
    "\\biguplus",
    "\\bigvee",
    "\\bigwedge",
    "\\binom{#}{#}",
    "\\blacklozenge",
    "\\blacksquare",
    "\\blacktriangle",
    "\\blacktriangledown",
    "\\blacktriangleleft",
    "\\blacktriangleright",
    "\\bmod",
    "\\boldsymbol{#}",
    "\\bot",
    "\\bowtie",
    "\\Box",
    "\\boxdot",
    "\\boxed{#}",
    "\\boxminus",
    "\\boxplus",
    "\\boxtimes",
    "\\bra{#}",
    "\\Bra{#}",
    "\\brace",
    "\\bracevert",
    "\\brack",
    "\\braket{#}",
    "\\Braket{#}",
    "\\breve{#}",
    "\\bullet",
    "\\bumpeq",
    "\\Bumpeq",
    "\\cal",
    "\\cancel{#}",
    "\\cancelto{#}{#}",
    "\\cap",
    "\\Cap",
    "\\cases{#}",
    "\\cdot",
    "\\cdotp",
    "\\cdots",
    "\\celsius",
    "\\centercolon",
    "\\centerdot",
    "\\centernot{#}",
    "\\centerOver{#}{#}",
    "\\cfrac{#}{#}",
    "\\check{#}",
    "\\checkmark",
    "\\chi",
    "\\choose",
    "\\circ",
    "\\circeq",
    "\\circlearrowleft",
    "\\circlearrowright",
    "\\circledast",
    "\\circledcirc",
    "\\circleddash",
    "\\circledR",
    "\\circledS",
    "\\clap{#}",
    "\\class{#}{#}",
    "\\clubsuit",
    "\\colon",
    "\\colonapprox",
    "\\Colonapprox",
    "\\coloneq",
    "\\Coloneq",
    "\\coloneqq",
    "\\Coloneqq",
    "\\colonsim",
    "\\Colonsim",
    "\\color{#}",
    "\\colorbox{#}{#}",
    "\\complement",
    "\\cong",
    "\\coprod",
    "\\cos",
    "\\cosh",
    "\\cot",
    "\\coth",
    "\\cramped{#}",
    "\\crampedclap{#}",
    "\\crampedllap{#}",
    "\\crampedrlap{#}",
    "\\crampedsubstack{#}",
    "\\csc",
    "\\cssId{#}{#}",
    "\\cup",
    "\\Cup",
    "\\curlyeqprec",
    "\\curlyeqsucc",
    "\\curlyvee",
    "\\curlywedge",
    "\\curvearrowleft",
    "\\curvearrowright",
    "\\dagger",
    "\\daleth",
    "\\dashleftarrow",
    "\\dashrightarrow",
    "\\dashv",
    "\\dbinom{#}{#}",
    "\\dblcolon",
    "\\ddagger",
    "\\ddddot{#}",
    "\\dddot{#}",
    "\\ddot{#}",
    "\\ddots",
    "\\DeclareMathOperator{#}{#}",
    "\\DeclarePairedDelimiters{#}{#}{#}",
    "\\DeclarePairedDelimitersX{#}{#}{#}{#}",
    "\\DeclarePairedDelimitersXPP{#}{#}{#}{#}{#}{#}",
    "\\deg",
    "\\degree",
    "\\delta",
    "\\Delta",
    "\\det",
    "\\dfrac{#}{#}",
    "\\diagdown",
    "\\diagup",
    "\\diamond",
    "\\Diamond",
    "\\diamondsuit",
    "\\digamma",
    "\\dim",
    "\\displaylines{#}",
    "\\displaystyle",
    "\\div",
    "\\divideontimes",
    "\\divsymbol",
    "\\dot{#}",
    "\\doteq",
    "\\Doteq",
    "\\doteqdot",
    "\\dotplus",
    "\\dots",
    "\\dotsb",
    "\\dotsc",
    "\\dotsi",
    "\\dotsm",
    "\\dotso",
    "\\doublebarwedge",
    "\\doublecap",
    "\\doublecup",
    "\\downarrow",
    "\\Downarrow",
    "\\downdownarrows",
    "\\downharpoonleft",
    "\\downharpoonright",
    "\\ell",
    "\\empheqbiglangle",
    "\\empheqbiglbrace",
    "\\empheqbiglbrack",
    "\\empheqbiglceil",
    "\\empheqbiglfloor",
    "\\empheqbiglparen",
    "\\empheqbiglvert",
    "\\empheqbiglVert",
    "\\empheqbigrangle",
    "\\empheqbigrbrace",
    "\\empheqbigrbrack",
    "\\empheqbigrceil",
    "\\empheqbigrfloor",
    "\\empheqbigrparen",
    "\\empheqbigrvert",
    "\\empheqbigrVert",
    "\\empheqlangle",
    "\\empheqlbrace",
    "\\empheqlbrack",
    "\\empheqlceil",
    "\\empheqlfloor",
    "\\empheqlparen",
    "\\empheqlvert",
    "\\empheqlVert",
    "\\empheqrangle",
    "\\empheqrbrace",
    "\\empheqrbrack",
    "\\empheqrceil",
    "\\empheqrfloor",
    "\\empheqrparen",
    "\\empheqrvert",
    "\\empheqrVert",
    "\\emptyset",
    "\\enclose{#}{#}",
    "\\enspace",
    "\\epsilon",
    "\\eqalign{#}",
    "\\eqalignno{#}",
    "\\eqcirc",
    "\\eqcolon",
    "\\Eqcolon",
    "\\eqqcolon",
    "\\Eqqcolon",
    "\\eqref{#}",
    "\\eqsim",
    "\\eqslantgtr",
    "\\eqslantless",
    "\\equiv",
    "\\eta",
    "\\eth",
    "\\exists",
    "\\exp",
    "\\fallingdotseq",
    "\\fbox{#}",
    "\\fCenter",
    "\\fcolorbox{#}{#}{#}",
    "\\Finv",
    "\\flat",
    "\\forall",
    "\\frac{#}{#}",
    "\\frak",
    "\\framebox{#}",
    "\\frown",
    "\\Game",
    "\\gamma",
    "\\Gamma",
    "\\gcd",
    "\\ge",
    "\\geq",
    "\\geqq",
    "\\geqslant",
    "\\gets",
    "\\gg",
    "\\ggg",
    "\\gggtr",
    "\\gimel",
    "\\gnapprox",
    "\\gneq",
    "\\gneqq",
    "\\gnsim",
    "\\grave{#}",
    "\\gt",
    "\\gtrapprox",
    "\\gtrdot",
    "\\gtreqless",
    "\\gtreqqless",
    "\\gtrless",
    "\\gtrsim",
    "\\gvertneqq",
    "\\hat{#}",
    "\\hbar",
    "\\hbox{#}",
    "\\heartsuit",
    "\\hom",
    "\\hookleftarrow",
    "\\hookrightarrow",
    "\\hphantom{#}",
    "\\href{#}{#}",
    "\\hslash",
    "\\huge",
    "\\Huge",
    "\\idotsint",
    "\\iff",
    "\\iiiint",
    "\\iiint",
    "\\iint",
    "\\Im",
    "\\imath",
    "\\impliedby",
    "\\implies",
    "\\in",
    "\\inf",
    "\\infty",
    "\\injlim",
    "\\int",
    "\\int^{#}_{#}",
    "\\intercal",
    "\\intop",
    "\\iota",
    "\\it",
    "\\jmath",
    "\\Join",
    "\\kappa",
    "\\ker",
    "\\ket{#}",
    "\\Ket{#}",
    "\\ketbra{#}{#}",
    "\\Ketbra{#}{#}",
    "\\label{#}",
    "\\lambda",
    "\\Lambda",
    "\\land",
    "\\langle",
    "\\large",
    "\\Large",
    "\\LARGE",
    "\\LaTeX",
    "\\lbrace",
    "\\lbrack",
    "\\lceil",
    "\\ldotp",
    "\\ldots",
    "\\le",
    "\\leadsto",
    "\\Leftarrow",
    "\\leftarrow",
    "\\leftarrowtail",
    "\\leftharpoondown",
    "\\leftharpoonup",
    "\\leftleftarrows",
    "\\Leftrightarrow",
    "\\leftrightarrow",
    "\\leftrightarrows",
    "\\leftrightharpoons",
    "\\leftrightsquigarrow",
    "\\leftthreetimes",
    "\\leq",
    "\\leqalignno{#}",
    "\\leqq",
    "\\leqslant",
    "\\lessapprox",
    "\\lessdot",
    "\\lesseqgtr",
    "\\lesseqqgtr",
    "\\lessgtr",
    "\\lesssim",
    "\\lfloor",
    "\\lg",
    "\\lgroup",
    "\\lhd",
    "\\lim",
    "\\liminf",
    "\\limsup",
    "\\ll",
    "\\llap{#}",
    "\\llcorner",
    "\\Lleftarrow",
    "\\lll",
    "\\llless",
    "\\lmoustache",
    "\\ln",
    "\\lnapprox",
    "\\lneq",
    "\\lneqq",
    "\\lnot",
    "\\lnsim",
    "\\log",
    "\\longleftarrow",
    "\\Longleftarrow",
    "\\Longleftrightarrow",
    "\\longleftrightarrow",
    "\\longleftrightarrows",
    "\\longLeftrightharpoons",
    "\\longmapsto",
    "\\longrightarrow",
    "\\Longrightarrow",
    "\\longrightleftharpoons",
    "\\longRightleftharpoons",
    "\\looparrowleft",
    "\\looparrowright",
    "\\lor",
    "\\lozenge",
    "\\lparen",
    "\\lrcorner",
    "\\Lsh",
    "\\lt",
    "\\ltimes",
    "\\lvert",
    "\\lVert",
    "\\lvertneqq",
    "\\maltese",
    "\\mapsto",
    "\\mathbb{#}",
    "\\mathbb{N}",
    "\\mathbb{Z}",
    "\\mathbb{Q}",
    "\\mathbb{R}",
    "\\mathbb{C}",
    "\\mathbf{#}",
    "\\mathbfcal{#}",
    "\\mathbffrak{#}",
    "\\mathbfit{#}",
    "\\mathbfscr{#}",
    "\\mathbfsf{#}",
    "\\mathbfsfit{#}",
    "\\mathbfsfup{#}",
    "\\mathbfup{#}",
    "\\mathbin{#}",
    "\\mathcal{#}",
    "\\mathchoice{#}{#}{#}{#}",
    "\\mathclap{#}",
    "\\mathclose{#}",
    "\\mathfrak{#}",
    "\\mathinner{#}",
    "\\mathit{#}",
    "\\mathllap{#}",
    "\\mathmakebox{#}",
    "\\mathmbox{#}",
    "\\mathnormal{#}",
    "\\mathop{#}",
    "\\mathopen{#}",
    "\\mathord{#}",
    "\\mathpunct{#}",
    "\\mathrel{#}",
    "\\mathring{#}",
    "\\mathrlap{#}",
    "\\mathrm{#}",
    "\\mathscr{#}",
    "\\mathsf{#}",
    "\\mathsfit{#}",
    "\\mathsfup{#}",
    "\\mathstrut",
    "\\mathtip{#}{#}",
    "\\mathtt{#}",
    "\\mathup{#}",
    "\\matrix{#}",
    "\\max",
    "\\mbox{#}",
    "\\measuredangle",
    "\\mho",
    "\\micro",
    "\\mid",
    "\\min",
    "\\mit",
    "\\mod{#}",
    "\\models",
    "\\mp",
    "\\MTThinColon",
    "\\mu",
    "\\multimap",
    "\\nabla",
    "\\natural",
    "\\ncong",
    "\\ndownarrow",
    "\\ne",
    "\\nearrow",
    "\\neg",
    "\\negmedspace",
    "\\negthickspace",
    "\\negthinspace",
    "\\neq",
    "\\newcommand{#}{#}",
    "\\newenvironment{#}{#}{#}",
    "\\newline",
    "\\newtagform{#}{#}{#}",
    "\\nexists",
    "\\ngeq",
    "\\ngeqq",
    "\\ngeqslant",
    "\\ngtr",
    "\\ni",
    "\\nleftarrow",
    "\\nLeftarrow",
    "\\nleftrightarrow",
    "\\nLeftrightarrow",
    "\\nleq",
    "\\nleqq",
    "\\nleqslant",
    "\\nless",
    "\\nmid",
    "\\nobreakspace",
    "\\nonscript",
    "\\nonumber",
    "\\normalsize",
    "\\not",
    "\\notag",
    "\\notChar",
    "\\notin",
    "\\nparallel",
    "\\nprec",
    "\\npreceq",
    "\\nrightarrow",
    "\\nRightarrow",
    "\\nshortmid",
    "\\nshortparallel",
    "\\nsim",
    "\\nsubseteq",
    "\\nsubseteqq",
    "\\nsucc",
    "\\nsucceq",
    "\\nsupseteq",
    "\\nsupseteqq",
    "\\ntriangleleft",
    "\\ntrianglelefteq",
    "\\ntriangleright",
    "\\ntrianglerighteq",
    "\\nu",
    "\\nuparrow",
    "\\nvdash",
    "\\nvDash",
    "\\nVdash",
    "\\nVDash",
    "\\nwarrow",
    "\\odot",
    "\\ohm",
    "\\oint",
    "\\oldstyle",
    "\\omega",
    "\\Omega",
    "\\omicron",
    "\\ominus",
    "\\operatorname{#}",
    "\\oplus",
    "\\ordinarycolon",
    "\\oslash",
    "\\otimes",
    "\\over",
    "\\overbrace{#}",
    "\\overbracket{#}",
    "\\overleftarrow{#}",
    "\\overleftrightarrow{#}",
    "\\overline{#}",
    "\\overparen{#}",
    "\\overrightarrow{#}",
    "\\overset{#}{#}",
    "\\overunderset{#}{#}{#}",
    "\\owns",
    "\\parallel",
    "\\partial",
    "\\perp",
    "\\perthousand",
    "\\phantom{#}",
    "\\phi",
    "\\Phi",
    "\\pi",
    "\\Pi",
    "\\pitchfork",
    "\\pm",
    "\\pmatrix{#}",
    "\\pmb{#}",
    "\\pmod{#}",
    "\\pod{#}",
    "\\Pr",
    "\\prec",
    "\\precapprox",
    "\\preccurlyeq",
    "\\preceq",
    "\\precnapprox",
    "\\precneqq",
    "\\precnsim",
    "\\precsim",
    "\\prescript{#}{#}{#}",
    "\\prime",
    "\\prod",
    "\\prod^{#}_{#}",
    "\\projlim",
    "\\propto",
    "\\psi",
    "\\Psi",
    "\\qquad",
    "\\quad",
    "\\rangle",
    "\\rbrace",
    "\\rbrack",
    "\\rceil",
    "\\Re",
    "\\ref{#}",
    "\\refeq{#}",
    "\\renewcommand{#}{#}",
    "\\renewenvironment{#}{#}{#}",
    "\\renewtagform{#}{#}{#}",
    "\\restriction",
    "\\rfloor",
    "\\rgroup",
    "\\rhd",
    "\\rho",
    "\\Rightarrow",
    "\\rightarrow",
    "\\rightarrowtail",
    "\\rightharpoondown",
    "\\rightharpoonup",
    "\\rightleftarrows",
    "\\rightleftharpoons",
    "\\rightrightarrows",
    "\\rightsquigarrow",
    "\\rightthreetimes",
    "\\risingdotseq",
    "\\rlap{#}",
    "\\rm",
    "\\rmoustache",
    "\\rparen",
    "\\Rrightarrow",
    "\\Rsh",
    "\\rtimes",
    "\\rvert",
    "\\rVert",
    "\\S",
    "\\scr",
    "\\scriptscriptstyle",
    "\\scriptsize",
    "\\scriptstyle",
    "\\searrow",
    "\\sec",
    "\\set{#}",
    "\\Set{#}",
    "\\setminus",
    "\\sf",
    "\\sharp",
    "\\shortmid",
    "\\shortparallel",
    "\\sideset{#}{#}{#}",
    "\\sigma",
    "\\Sigma",
    "\\sim",
    "\\simeq",
    "\\sin",
    "\\sinh",
    "\\skew{#}{#}{#}",
    "\\SkipLimits",
    "\\small",
    "\\smallfrown",
    "\\smallint",
    "\\smallsetminus",
    "\\smallsmile",
    "\\smash{#}",
    "\\smile",
    "\\space",
    "\\spadesuit",
    "\\sphericalangle",
    "\\splitdfrac{#}{#}",
    "\\splitfrac{#}{#}",
    "\\sqcap",
    "\\sqcup",
    "\\sqrt{#}",
    "\\sqsubset",
    "\\sqsubseteq",
    "\\sqsupset",
    "\\sqsupseteq",
    "\\square",
    "\\stackbin{#}{#}",
    "\\stackrel{#}{#}",
    "\\star",
    "\\strut",
    "\\style{#}{#}",
    "\\subset",
    "\\Subset",
    "\\subseteq",
    "\\subseteqq",
    "\\subsetneq",
    "\\subsetneqq",
    "\\substack{#}",
    "\\succ",
    "\\succapprox",
    "\\succcurlyeq",
    "\\succeq",
    "\\succnapprox",
    "\\succneqq",
    "\\succnsim",
    "\\succsim",
    "\\sum",
    "\\sum^{#}_{#}",
    "\\sup",
    "\\supset",
    "\\Supset",
    "\\supseteq",
    "\\supseteqq",
    "\\supsetneq",
    "\\supsetneqq",
    "\\surd",
    "\\swarrow",
    "\\symbb{#}",
    "\\symbf{#}",
    "\\symbfcal{#}",
    "\\symbffrak{#}",
    "\\symbfit{#}",
    "\\symbfscr{#}",
    "\\symbfsf{#}",
    "\\symbfsfit{#}",
    "\\symbfsfup{#}",
    "\\symbfup{#}",
    "\\symcal{#}",
    "\\symfrak{#}",
    "\\symit{#}",
    "\\symnormal{#}",
    "\\symrm{#}",
    "\\symscr{#}",
    "\\symsf{#}",
    "\\symsfit{#}",
    "\\symsfup{#}",
    "\\symtt{#}",
    "\\symup{#}",
    "\\tag{#}",
    "\\tan",
    "\\tanh",
    "\\tau",
    "\\tbinom{#}{#}",
    "\\TeX",
    "\\text{#}",
    "\\textacutedbl",
    "\\textasciiacute",
    "\\textasciibreve",
    "\\textasciicaron",
    "\\textasciicircum",
    "\\textasciidieresis",
    "\\textasciimacron",
    "\\textasciitilde",
    "\\textasteriskcentered",
    "\\textbackslash",
    "\\textbaht",
    "\\textbar",
    "\\textbardbl",
    "\\textbf{#}",
    "\\textbigcircle",
    "\\textblank",
    "\\textborn",
    "\\textbraceleft",
    "\\textbraceright",
    "\\textbrokenbar",
    "\\textbullet",
    "\\textcelsius",
    "\\textcent",
    "\\textcentoldstyle",
    "\\textcircledP",
    "\\textclap{#}",
    "\\textcolonmonetary",
    "\\textcolor{#}{#}",
    "\\textcompwordmark",
    "\\textcopyleft",
    "\\textcopyright",
    "\\textcurrency",
    "\\textdagger",
    "\\textdaggerdbl",
    "\\textdegree",
    "\\textdied",
    "\\textdiscount",
    "\\textdiv",
    "\\textdivorced",
    "\\textdollar",
    "\\textdollaroldstyle",
    "\\textdong",
    "\\textdownarrow",
    "\\texteightoldstyle",
    "\\textellipsis",
    "\\textemdash",
    "\\textendash",
    "\\textestimated",
    "\\texteuro",
    "\\textexclamdown",
    "\\textfiveoldstyle",
    "\\textflorin",
    "\\textfouroldstyle",
    "\\textfractionsolidus",
    "\\textgravedbl",
    "\\textgreater",
    "\\textguarani",
    "\\textinterrobang",
    "\\textinterrobangdown",
    "\\textit{#}",
    "\\textlangle",
    "\\textlbrackdbl",
    "\\textleftarrow",
    "\\textless",
    "\\textlira",
    "\\textllap{#}",
    "\\textlnot",
    "\\textlquill",
    "\\textmarried",
    "\\textmho",
    "\\textminus",
    "\\textmu",
    "\\textmusicalnote",
    "\\textnaira",
    "\\textnineoldstyle",
    "\\textnormal{#}",
    "\\textnumero",
    "\\textohm",
    "\\textonehalf",
    "\\textoneoldstyle",
    "\\textonequarter",
    "\\textonesuperior",
    "\\textopenbullet",
    "\\textordfeminine",
    "\\textordmasculine",
    "\\textparagraph",
    "\\textperiodcentered",
    "\\textpertenthousand",
    "\\textperthousand",
    "\\textpeso",
    "\\textpm",
    "\\textquestiondown",
    "\\textquotedblleft",
    "\\textquotedblright",
    "\\textquoteleft",
    "\\textquoteright",
    "\\textrangle",
    "\\textrbrackdbl",
    "\\textrecipe",
    "\\textreferencemark",
    "\\textregistered",
    "\\textrightarrow",
    "\\textrlap{#}",
    "\\textrm{#}",
    "\\textrquill",
    "\\textsection",
    "\\textservicemark",
    "\\textsevenoldstyle",
    "\\textsf{#}",
    "\\textsixoldstyle",
    "\\textsterling",
    "\\textstyle",
    "\\textsurd",
    "\\textthreeoldstyle",
    "\\textthreequarters",
    "\\textthreesuperior",
    "\\texttildelow",
    "\\texttimes",
    "\\texttip{#}{#}",
    "\\texttrademark",
    "\\texttt{#}",
    "\\texttwooldstyle",
    "\\texttwosuperior",
    "\\textunderscore",
    "\\textup{#}",
    "\\textuparrow",
    "\\textvisiblespace",
    "\\textwon",
    "\\textyen",
    "\\textzerooldstyle",
    "\\tfrac{#}{#}",
    "\\therefore",
    "\\theta",
    "\\Theta",
    "\\thickapprox",
    "\\thicksim",
    "\\thinspace",
    "\\tilde{#}",
    "\\times",
    "\\tiny",
    "\\Tiny",
    "\\to",
    "\\top",
    "\\triangle",
    "\\triangledown",
    "\\triangleleft",
    "\\trianglelefteq",
    "\\triangleq",
    "\\triangleright",
    "\\trianglerighteq",
    "\\tripledash",
    "\\tt",
    "\\twoheadleftarrow",
    "\\twoheadrightarrow",
    "\\ulcorner",
    "\\underbrace{#}",
    "\\underbracket{#}",
    "\\underleftarrow{#}",
    "\\underleftrightarrow{#}",
    "\\underline{#}",
    "\\underparen{#}",
    "\\underrightarrow{#}",
    "\\underset{#}{#}",
    "\\unicode{#}",
    "\\unlhd",
    "\\unrhd",
    "\\upalpha",
    "\\uparrow",
    "\\Uparrow",
    "\\upbeta",
    "\\upchi",
    "\\updelta",
    "\\Updelta",
    "\\updownarrow",
    "\\Updownarrow",
    "\\upepsilon",
    "\\upeta",
    "\\upgamma",
    "\\Upgamma",
    "\\upharpoonleft",
    "\\upharpoonright",
    "\\upiota",
    "\\upkappa",
    "\\uplambda",
    "\\Uplambda",
    "\\uplus",
    "\\upmu",
    "\\upnu",
    "\\upomega",
    "\\Upomega",
    "\\upomicron",
    "\\upphi",
    "\\Upphi",
    "\\uppi",
    "\\Uppi",
    "\\uppsi",
    "\\Uppsi",
    "\\uprho",
    "\\upsigma",
    "\\Upsigma",
    "\\upsilon",
    "\\Upsilon",
    "\\uptau",
    "\\uptheta",
    "\\Uptheta",
    "\\upuparrows",
    "\\upupsilon",
    "\\Upupsilon",
    "\\upvarepsilon",
    "\\upvarphi",
    "\\upvarpi",
    "\\upvarrho",
    "\\upvarsigma",
    "\\upvartheta",
    "\\upxi",
    "\\Upxi",
    "\\upzeta",
    "\\urcorner",
    "\\usetagform{#}",
    "\\varDelta",
    "\\varepsilon",
    "\\varGamma",
    "\\varinjlim",
    "\\varkappa",
    "\\varLambda",
    "\\varliminf",
    "\\varlimsup",
    "\\varnothing",
    "\\varOmega",
    "\\varphi",
    "\\varPhi",
    "\\varpi",
    "\\varPi",
    "\\varprojlim",
    "\\varpropto",
    "\\varPsi",
    "\\varrho",
    "\\varsigma",
    "\\varSigma",
    "\\varsubsetneq",
    "\\varsubsetneqq",
    "\\varsupsetneq",
    "\\varsupsetneqq",
    "\\vartheta",
    "\\varTheta",
    "\\vartriangle",
    "\\vartriangleleft",
    "\\vartriangleright",
    "\\varUpsilon",
    "\\varXi",
    "\\vcenter{#}",
    "\\vdash",
    "\\vDash",
    "\\Vdash",
    "\\vdots",
    "\\vec{#}",
    "\\vee",
    "\\veebar",
    "\\Vert",
    "\\vert",
    "\\vphantom{#}",
    "\\Vvdash",
    "\\wedge",
    "\\widehat{#}",
    "\\widetilde{#}",
    "\\wp",
    "\\wr",
    "\\xcancel{#}",
    "\\xhookleftarrow{#}",
    "\\xhookrightarrow{#}",
    "\\xi",
    "\\Xi",
    "\\xleftarrow{#}",
    "\\xLeftarrow{#}",
    "\\xleftharpoondown{#}",
    "\\xleftharpoonup{#}",
    "\\xleftrightarrow{#}",
    "\\xLeftrightarrow{#}",
    "\\xleftrightharpoons{#}",
    "\\xLeftrightharpoons{#}",
    "\\xlongequal{#}",
    "\\xmapsto{#}",
    "\\xmathstrut{#}",
    "\\xrightarrow{#}",
    "\\xRightarrow{#}",
    "\\xrightharpoondown{#}",
    "\\xrightharpoonup{#}",
    "\\xrightleftharpoons{#}",
    "\\xRightleftharpoons{#}",
    "\\xtofrom{#}",
    "\\xtwoheadleftarrow{#}",
    "\\xtwoheadrightarrow{#}",
    "\\yen",
    "\\zeta",
].sort((a, b) => a.length - b.length);
