// Instructions for future offerings of CS 103:
// ============================================
// Simply copy the entire directory containing this definitions.js file. If you
// need to modify any of the Javascript besides this file, build instructions
// and source code is available at https://github.com/drifkin/cs103-reference

// Instructions to add more definitions:
// =====================================
//
// Copy one of the existing definitions to the end of the array. Note that for
// the "definition" field, you can either provide a string if it's just a
// single paragraph, or provide an array of strings to split the definition up
// into multiple paragraphs.
//
// The definition field is allowed to contain HTML. It also supports entering
// LaTeX, but since we're entering them as Javascript strings, all backslashes
// must be escaped! So instead of something like $O(n \log n)$, you must enter
// $O(n \\log n)$. Sorry! This is definitely a weird way to input things, but
// it keeps all the edits to just this file and lets everyone test their edits
// locally without installing any additional software.
window.definitions = [
    {
        "name": "Alphabet",
        "definition": "An alphabet is a finite set of symbols called characters.",
        "lecture": 14,
        "slide": 3
    },
    {
        "name": "Antecedent",
        "definition": "In an implication of the form &quot;If P is true, then Q is true&quot;, the antecedent is the term &quot;P is true&quot;.",
        "lecture": 2,
        "slide": 14
    },
    {
        "name": "Antisymmetric",
        "definition": [
            "A binary relation R over a set A is antisymmetric if $\\forall a \\in A. \\forall b \\in A. ((aRb \\land bRa) \\to a=b)$, or equivalently if $\\forall a \\in A. \\forall b \\in B. ((a \\neq b \\land aRb) \\to \\lnot (bRa)$.",
            "In other words, a relation is antisymmetric if two elements are only related to each other in both directions if they are equal. For example, $\\leq$ is antisymmetric over $\\mathbb{Z}$, since if $m \\leq n$ and $n \\leq m$ we know $m = n$."
        ],
        "lecture": 12,
        "slide": 39
    },
    {
        "name": "Arbitrary Choice",
        "definition": "In mathematical proofs, an arbitrary choice of $x$ is a statement that $x$ is left unspecified so that any result proven about $x$ holds for any choice of $x$",
        "lecture": 1,
        "slide": 24
    },
    {
        "name": "Arity",
        "definition": "The arity of a predicate is the number of arguments it can take.",
        "lecture": 8,
        "slide": 22
    },
    {
        "name": "Associative Operator",
        "definition": "A binary operator $\\diamond$ is called associative when for any $a,b,c$ we have: $a\\diamond (b \\diamond c)=(a \\diamond b) \\diamond c$",
        "lecture": 1,
        "slide": 59
    },
    {
        "name": "Automaton",
        "definition": "An automaton (plural: automata) is a mathematical model of a computing device",
        "lecture": 13,
        "slide": 6
    },
    {
        "name": "Base Case (or Basis)",
        "definition": "In a proof by induction, the first step in which you prove that P is true for 0.",
        "lecture": 3,
        "slide": 6
    },
    {
        "name": "Biconditional",
        "definition": "A biconditional is a statement of the form &quot;P if and only if Q&quot;, often abbreviated &quot;P iff Q&quot;.",
        "lecture": 2,
        "slide": 27
    },
    {
        "name": "Biconditional Operator (Logic)",
        "definition": "The biconditional operator $\\leftrightarrow$ is used to represnet two-directional implication (i.e. &quot;$p\\leftrightarrow q$&quot; means &quot;$p \\rightarrow q$&quot; and &quot;$q \\rightarrow $p$&quot;.)",
        "lecture": 7,
        "slide": 22
    },
    {
        "name": "Bijective Functions (Bijections)",
        "definition": "A function that associates each element of the codomain with a unique element of the domain.",
        "lecture": 10,
        "slide": 53
    },
    {
        "name": "Binary Operator",
        "definition": "A binary operator is an operator that operates on two operands. For example: +,-,XOR",
        "lecture": 1,
        "slide": 48
    },
    {
        "name": "Binary Relation",
        "definition": [
            "A binary relation R over a set A establishes a relationship between pairs of elements of A. In particular, for any elements x and y of A, $xRy$ is either true (so x and y are related by R) or false (so x and y aren&apos;t related).",
            "For example, &lt; is a binary relation over $\\mathbb{Z}$, and $\\leftrightarrow$ is a binary relation over the nodes $V$ of any undirected graph $G = (V, E)$."
        ],
        "lecture": 12,
        "slide": 6
    },
    {
        "name": "Cantor's theorem",
        "definition": "Cantor&apos;s theorem states that every set is strictly smaller than its power set. If $S$ is a set, then $|S| \\lt |\\mathcal P \\left({S}\\right)| $.",
        "lecture": 0,
        "slide": 87
    },
    {
        "name": "Cantor-Bernstein-Schroeder Theorem",
        "definition": "If $S$ and $T$ are sets where $|S| \\leq |T|$ and $|T| \\leq |S|$, then $|T| = |S|$.",
        "lecture": 11,
        "slide": 25
    },
    {
        "name": "Cardinality",
        "definition": [
            "The cardinality of a set is the number of elements it contains.",
            "Proof: <a href=\"../lectures/11/Slides11.pdf#page=104\">Lecture 11, Slide 104</a>."
        ],
        "lecture": 0,
        "slide": 46
    },
    {
        "name": "Cardinality Comparison",
        "definition": [
            "$|S| = |T|$ if there exists a bijection f from S to T. ",
            "$|S| \\leq |T|$ if there exists a injection f from S to T. ",
            "$|S| &lt; |T|$ iff $|S| \\leq |T|$ and $|S| \\neq |T|$ . "
        ],
        "lecture": 11,
        "slide": 101
    },
    {
        "name": "Cartesian Product",
        "definition": "The Cartesian Product $A \\times B$ is defined as $\\{(a, b) | a \\in A, b \\in B \\}$",
        "lecture": 11,
        "slide": 6
    },
    {
        "name": "Certificate",
        "definition": "If $w \\in L$ a string $c$ for which <a href=\"#Verifier\">Verifier</a> $V$ accepts $< w,c >$ is called a certificate for $w$", 
        "lecture": 24,
        "slide": 39
    },
    {
        "name": "Chromatic number",
        "definition": "The chromatic number of a graph is the minimum number of colors needed to color a graph.",
        "lecture": 6,
        "slide": 62
    },
    {
        "name": "Closure of a regular language under complementation",
        "definition": "Theorem: If $L$ is a regular language, then $\\bar{L}$ is also a regular language. Here, $\\bar{L}$ denotes the <a href=\"#Complement\">complement</a> of $L$.",
        "lecture": 14,
        "slide": 24
    },
    {
        "name": "Closure of a regular language under concatenation",
        "definition": "Theorem: If $L_1$ and $L_2$ are regular languages over the alphabet $\\Sigma$, then $L_{1}L_{2}$ is also a regular language over the alphabet $\\Sigma$. Here, $L_{1}L_{2}$ denotes the <a href=\"#Concatenation\">concatenation</a> of $L_1$ and $L_2$.",
        "lecture": 15,
        "slide": 35
    },
    {
        "name": "Closure of a regular language under intersection",
        "definition": "Theorem: If $L_1$ and $L_2$ are regular languages over the alphabet $\\Sigma$, then $L_1 \\cap L_2$ is also a regular language over the alphabet $\\Sigma$. ",
        "lecture": 15,
        "slide": 30
    },
    {
        "name": "Closure of a regular language under union",
        "definition": "Theorem: If $L_1$ and $L_2$ are regular languages over the alphabet $\\Sigma$, then $L_1 \\cup L_2$ is also a regular language over the alphabet $\\Sigma$. ",
        "lecture": 15,
        "slide": 29
    },
    {
        "name": "Codomain",
        "definition": "If f is a function from A to B, we call B the codomain of f.",
        "lecture": 10,
        "slide": 68
    },
    {
        "name": "Commutative Operator",
        "definition": "A binary operator $\\diamond$ is called commutative when the following is always true: $a\\diamond b = b \\diamond a$",
        "lecture": 1,
        "slide": 69
    },
    {
        "name": "Complement (of a language)",
        "definition": "Given a language $L \\subseteq \\Sigma^*$, the <i>complement</i> of that language (denoted $\\bar{L}$) is the language of all strings in $\\Sigma^*$ not in $L$.",
        "lecture": 14,
        "slide": 19
    },
    {
        "name": "Complete Induction",
        "definition": "See <a href=\"#Principle of Complete (or Strong) Induction\">Principle of Complete (or Strong) Induction</a> below.",
        "lecture": 5,
        "slide": 5
    },
    {
        "name": "Concatenation (of two languages)",
        "definition": "The concatenation of two languages $L_1$ and $L_2$ over the alphabet $\\Sigma$ is the language $L_{1}L_{2} = \\{ wx \\in \\Sigma^* \\mid w \\in L_1 \\wedge x \\in L_2 \\}$.",
        "lecture": 15,
        "slide": 31
    },
    {
        "name": "Connected",
        "definition": "In an undirected graph, two nodes $u$ and $v$ are called connected if there is a path from $u$ to $v$. We denote this as $u\\leftrightarrow v$. If $u$ is not connected to $v$, we write $u\\not\\leftrightarrow v$.",
        "lecture": 6,
        "slide": 16
    },
    {
        "name": "Connected Component",
        "definition": "A connected component of an undirected graph $G=(V,E)$ is a non empty set $C\\subseteq V$ where <ul> <li>For any nodes $u,v\\in C$, the relation $u\\leftrightarrow v$ holds.</li> <li>For any nodes $u\\in C$ and $v\\in V-C$, the relation $u\\not\\leftrightarrow v$ holds. </li></ul> ",
        "lecture": 6,
        "slide": 25
    },
    {
        "name": "Consequent",
        "definition": "In an implication of the form &quot;If P is true, then Q is true&quot;, the consequent is the term &quot;Q is true&quot;.",
        "lecture": 2,
        "slide": 14
    },
    {
        "name": "Context Free Grammar",
        "definition": "Formally, a context-free grammar is a collection of four objects: <ul><li>A set of nonterminal symbols (also called variables)</li><li>A set of terminal symbols (the alphabet of the CFG)</li><li>A set of production rules saying how each nonterminal can be converted by a string of terminals and nonterminals</li><li>A start symbol (which must be a nonterminal) that begins the derivation.</li></ul>",
        "lecture": 18,
        "slide": 6
    },
    {
        "name": "Context Free Language",
        "definition" : "A language L is called a context-free language (or CFL) if there is a CFG Gs uch that L = L(G).",
        "lecture" : 18,
        "slide" : 15
    },
    {
        "name": "Contrapositive",
        "definition": "The contrapositive of the statement &quot;p &#x2192; q&quot; is the statement &quot;&#xAC;q &#x2192; &#xAC;p&quot;.",
        "lecture": 8,
        "slide": 7
    },
	{
		"name": "Co-RE",
		"definition": "Co-RE is a class of languages. A language L is in co-RE iff there is a TM M such that 1) if w is in L, then M does not reject w, and 2) if w is not in L, then M rejects w. A language L is in co-RE if and only if $\\bar{L}$ is in RE.",
		"lecture": 23,
		"slide": 30
	},
	{
		"name": "Co-recognizable",
		"definition": "A TM M whose language is co-RE is called a co-recognizer, and the language L is called co-recognizable.",
		"lecture": 23,
		"slide": 31
	},
    {
        "name": "Cycle",
        "definition": "A cycle in a graph is a path from a node to itself.",
        "lecture": 6,
        "slide": 13
    },
    {
        "name": "DFA",
        "definition": "A DFA is a <i>Deterministic Finite Automaton</i>. It is defined relative to some alphabet $\\Sigma$. For each state in the DFA, there must be exactly one transition defined for each symbol in $\\Sigma$. A DFA has a unique start state, and 0 or more accepting states.",
        "lecture": 14,
        "slide": 8
    },
    {
        "name": "De Morgan's Laws",
        "definition": "The following two equivalences are called De Morgan&apos;s Laws: $\\lnot(p \\land q) \\equiv \\lnot p \\lor \\not q$ and $\\lnot(p \\lor q) \\equiv \\lnot p \\land \\lnot q$.",
        "lecture": 7,
        "slide": 50
    },
    {
        "name": "Derivation",
        "definition": "A sequence of steps where nonterminals are replaced by the right-hand side of a production is called a derivation.",
        "lecture": 18,
        "slide": 10
    },
    {
        "name": "Deterministic Computation",
        "definition": "A model of computation is <i>deterministic</i> if at every point of the computation, there is exactly one choice it can make.",
        "lecture": 14,
        "slide": 40
    },
    {
        "name": "Direct Proof",
        "definition": "A proof that starts with an initial set of assumptions then applies simple logical steps to <i>directly</i> derive a result.",
        "lecture": 1,
        "slide": 10
    },
    {
        "name": "Disproof",
        "definition": "A disproof is an argument establishing why a statement is false. This is often done by stating you will disprove a statement, writing its negation, and writing a normal proof that the statement is false.",
        "lecture": 2,
        "slide": 4
    },
    {
        "name": "Distinguishability",
        "definition": "Two strings $ x, y \\in \\Sigma^{*} $ are called distinguishable relative to $L$ if there is some string $w \\in \\Sigma^{*}$ where exactly one of $xw$ and $yw$ belongs to L.",
        "lecture": 17,
        "slide": 27
    },
    {
        "name": "Domain",
        "definition": "If f is a function from A to B, we call A the domain of f.",
        "lecture": 10,
        "slide": 68
    },
    {
        "name": "Domain of Discourse (First-Order Logic)",
        "definition": "The set of objects to which any variable can refer.",
        "lecture": 8,
        "slide": 20
    },
    {
        "name": "Empty String",
        "definition": "The <i>empty string</i> is a <a href=\"#String\">string</a> which contains no characters and is denoted $\\varepsilon$.",
        "lecture": 14,
        "slide": 3
    },
    {
        "name": "Epsilon Transition",
        "definition": "<a href=\"#NFA\">NFAs</a> have a special type of transition called the $\\varepsilon$-transition. An NFA may follow any number of $\\varepsilon$-transitions at any time without consuming any input, though it is not required to follow these transitions.",
        "lecture": 14,
        "slide": 44
    },
    {
        "name": "Equivalence (Logic)",
        "definition": "Two propositional formulas are called equivalent if they have the same truth tables.",
        "lecture": 8,
        "slide": 5
    },
    {
        "name": "Equivalence Class",
        "definition": [
            "If R is an <a href=\"#Equivalence Relation\">equivalence relation</a> over the set A, then the equivalence class of any $x \\in A$ is the set $[x]_R = \\{y \\in A | xRy\\}$.",
            "In other words, the equivalence class of x is the set of elements it&apos;s related to. Every element of A belongs to exactly one equivalence class.",
            "For example, the connected components of a given graph are the equivalence classes of $\\leftrightarrow$ on the nodes of that graph."
        ],
        "lecture": 12,
        "slide": 19
    },
    {
        "name": "Equivalence Relation",
        "definition": "An equivalence relation is a binary relation which is <a href=\"#Reflexive\">reflexive</a>, <a href=\"#Symmetric\">symmetric</a>, and <a href=\"#Transitive\">transitive</a>. For example, = (over $\\mathbb{Z}$) and $\\leftrightarrow$ (over the nodes of an undirected graph) are equivalence relations.",
        "lecture": 12,
        "slide": 15
    },
    {
        "name": "Even Number",
        "definition": "An integer $n$ is even if there exists some integer $k$ such that $n=2k$",
        "lecture": 1,
        "slide": 11
    },
    {
        "name": "Existential Statement",
        "definition": "An existential statement is a statement of the form: &quot;There exists an $x$ for which $P(x)$ is true. The negation of an existential statement is a universal statement.",
        "lecture": 1,
        "slide": 37
    },
    {
        "name": "Existence and uniqueness proof",
        "definition": "An existence and uniqueness proof is one where you show that there is at least and at most one object of a type.",
        "lecture": 6,
        "slide": 38
    },
    {
        "name": "Finite Automata",
        "definition": "Finite Automata are an abstraction of computers with finite resource constraints",
        "lecture": 13,
        "slide": 8
    },
    {
        "name": "First-Order Logic",
        "definition": "A logical system for reasoning about properties of objects. Augments the logical connectives from proposition logic with predicates, functions, and quantifiers.",
        "lecture": 8,
        "slide": 16
    },
    {
        "name": "Formal Language",
        "definition": [
            "A formal language is a set of <a href=\"#String\">strings</a>. We say that $L$ is a <i>language over</i> $\\Sigma$ if it is a set of strings over $\\Sigma$. For example, the language composed of all strings using letters in $\\Sigma$ is denoted $\\Sigma^*$.",
            "Formally, $L$ is a language over $\\Sigma$ iff $L \\subseteq \\Sigma^*$."
        ],
        "lecture": 14,
        "slide": 4
    },
    {
        "name": "Function",
        "definition": "A function f is a mapping from one set A to another set B such that every element of A is associated with a single element of B. For each a &#x2208; A, there is some b &#x2208; B with f(a) = b. If f(a) = b&#x2080; and f(a) = b&#xFFFD;&#xFFFD;?, then b&#x2080; = b&#xFFFD;&#xFFFD;?.",
        "lecture": 10,
        "slide": 68
    },
    {
        "name": "Function (First-Order Logic)",
        "definition": "A function maps objects to one another.",
        "lecture": 8,
        "slide": 16
    },
    {
        "name": "Graph",
        "definition": "A graph is an ordered pair $G=(V,E)$ where $V$ is a set of nodes, and $E$ isi a set of edges, which are either ordered pairs or unordered pairs of elements from $V$.",
        "lecture": 6,
        "slide": 4
    },
	{
		"name": "HALT language",
		"definition": "HALT is all encodings of M,w such that M is a TM that halts on w.",
		"lecture": 23,
		"slide": 7
	},
    {
        "name": "Hasse Diagram",
        "definition": "A Hasse diagram is a graphical representation of a partial order, where elements are drawn below elements they&apos;re &quot;less&quot; than and above elements they&apos;re &quot;greater&quot; than.",
        "lecture": 12,
        "slide": 49
    },
    {
	"name": "Halting Problem",
	"definition": "Definied as: 'Given a TM M and a string w, does M halts on w?'. As a formal language, HALT = { âŸ¨M, wâŸ© | M is a TM that halts on w. }. HALT is not decideable, i.e. HALT $\\notin $ R",
	"lecture": 22,
	"slide": 35,
    },
    {
        "name": "Identity Element",
        "definition": "An identity element for a binary operator $\\diamond$, is some value $z$ such that for any $a$, $a\\diamond z=z\\diamond a=a$",
        "lecture": 1,
        "slide": 22
    },
    {
        "name": "Implication",
        "definition": "An implication is a statement of the form: If P is true, then Q is true.",
        "lecture": 2,
        "slide": 13
    },
    {
        "name": "Implication (Logic)",
        "definition": "The $\\rightarrow$ connective is used represent implications. The statement $p \\rightarrow q$ means that &quot;whenever $p$ is true, $q$ is true as well. The only truth values of p and q that make an implication false are when p is true and q is false. Otherwise, the implication is true.&quot;",
        "lecture": 7,
        "slide": 18
    },
    {
        "name": "Inductive Hypothesis",
        "definition": "In a proof by induction during the inductive step: the assumption that $P$ is true for $k$",
        "lecture": 3,
        "slide": 6
    },
    {
        "name": "Inductive Step",
        "definition": "In a proof by induction: prove that if $P$ is true for some arbitrary natural number $k$, then $P$ must also be true for $k+1$",
        "lecture": 3,
        "slide": 6
    },
    {
        "name": "Injective Functions (Injections)",
        "definition": "A function is called injective (or one-to-one) if each element of the codomain has at most one element of the domain that maps to it.",
        "lecture": 10,
        "slide": 48
    },
    {
        "name": "Input Alphabet (Turing Machines)",
        "definition": "The alphabet $\\Sigma$ in which all input strings for a Turing machine are written",
        "lecture": 19,
        "slide": 9
    },
    {
        "name": "Integers",
        "definition": "The set $\\mathbb{Z} = \\left\\{ ..., -2, -1, 0, 1, 2, ... \\right\\}$ is the set of all the <i> integers</i>.",
        "lecture": 0,
        "slide": 22
    },
    {
        "name": "Irrational number",
        "definition": "An irrational number is a number that is not rational.",
        "lecture": 2,
        "slide": 49
    },
    {
        "name": "k-colorable",
        "definition": "An undirected graph $G=(V,E)$ is k-colorable iff the nodes in $V$ can be assigned one of $k$ different colors such that no two nodes of the same color are joined by an edge.",
        "lecture": 6,
        "slide": 62
    },
    {
        "name": "Kleene Closure",
        "definition": "The Kleene Closure is defined as $L^{*} = \\bigcup\\limits_{i=0}^\\infty L^{i}$. Intuitively, this represents all possible ways of concatenating any number of copies (including zero) of string in $L$ together. ",
        "lecture": 15,
        "slide": 37
    },
    {
        "name": "Language",
        "definition": "See <a href=\"#Formal Language\">Formal Language</a> above.",
        "lecture": 14,
        "slide": 4
    },
    {
        "name": "Language (of an automaton)",
        "definition": "The <i>language of an automaton</i> is the set of <a href=\"String\">strings</a> it accepts. If $D$ is an automaton, we denote the language of $D$ as $\\mathscr{L}(D)$.",
        "lecture": 14,
        "slide": 7
    },
    {
        "name": "Lemma",
        "definition": "A lemma is a smaller result proven specifically as a stepping stone towards a larger result.",
        "lecture": 1,
        "slide": 63
    },
    {
        "name": "Length (Cycle)",
        "definition": "The length of a cycle is the number of edges in that cycle.",
        "lecture": 6,
        "slide": 13
    },
    {
        "name": "Length (Path)",
        "definition": "The length of a path is the number of edges it contains, which is one less than the number of nodes in the path.",
        "lecture": 6,
        "slide": 9
    },
    {
        "name": "Logical Operator",
        "definition": "A logical operator is an operator that takes in some number of bits and produces a new bit as output.",
        "lecture": 1,
        "slide": 47
    },
    {
        "name": "Loop Invariants",
        "definition": "&quot;If P is true before we perform an action, it is true after we perform an action.&quot;",
        "lecture": 3,
        "slide": 54
    },
    {
        "name": "Mapping",
        "definition": "If f is a function from A to B, we say that f is a mapping from A to B.",
        "lecture": 10,
        "slide": 68
    },
    {
        "name": "Mathematical Proof",
        "definition": "An argument that demonstrates why a mathematical statement is true.",
        "lecture": 1,
        "slide": 7
    },
    {
        "name": "Myhill Nerode Theorem",
        "definition": [
            "Theorem: Let $L$ be a language over $\\Sigma$. If there is a set $S \\subseteq \\Sigma^{*}$ with the following two properties, then $L$ is not regular:",
            " $S$ is infinite (i.e. it contains infinitely many strings) ",
            " Any two different strings $x$ and $y$ in $S$ are distinguishable relative to $L$. "
        ],
        "lecture": 17,
        "slide": 28
    },
    {
        "name": "Natural numbers",
        "definition": "The set $\\mathbb{N} = \\left\\{0, 1, 2, 3 ... \\right\\}$ is the set of all the <i> natural numbers</i>.",
        "lecture": 0,
        "slide": 22
    },
    {
        "name": "Natural Numbers Cardinality",
        "definition": [
            "Theorem: $|\\mathbb{N}| = |\\mathbb{N}^2|$.",
            "Theorem: $|\\mathbb{N}| \\neq |\\mathbb{R}|$."
        ],
        "lecture": 11,
        "slide": 61
    },
    {
        "name": "Negation",
        "definition": "The negation of statement X is the opposite of the statement. This is often used to disprove a statement.",
        "lecture": 2,
        "slide": 5
    },
    {
        "name": "Negating First-Order Statements",
        "definition": [
            "$\\neg \\forall x. \\varphi \\equiv \\exists x. \\neg \\varphi$",
            "$\\neg \\exists x. \\varphi \\equiv \\forall x. \\neg \\varphi$",
            "$\\neg(p \\wedge q) \\equiv p \\to \\neg q$",
            "$\\neg(p \\to q) \\equiv p \\wedge \\neg q$"
        ],
        "lecture": 9,
        "slide": 33
    },
    {
        "name": "NFA",
        "definition": "An NFA is a <i>Nondeterministic Finite Automaton</i>. It is conceptually similar to a <a href=\"#DFA\">DFA</a>, but with the vast power of nondeterminism. A <a href=\"#Nondeterministic\">nondeterministic</a> machine accepts if <i>any</i> series of choices leads to an accepting state.",
        "lecture": 14,
        "slide": 41
    },
    {
        "name": "Nondeterministic Computation",
        "definition": "A model of computation is <i>nondeterministic</i> if the computing machine may have multiple decisions that it can make at one point.",
        "lecture": 14,
        "slide": 40
    },
    {
        "name": "Nondeterministic Turing Machine",
        "definition": "A <i>nondeterministic</i> Turing Machine (NTM) is a <a href=\"#Turing Machine\">Turing Machine</a> in which there can be zero or multiple transistions defined at each stage",  
        "lecture": 25,
        "slide": 9
    },
    {
        "name": "NTMs and DTMs",
        "definition":["If $L \\in \\textbf{RE}$ then there is a <a href=\"#Nondeterministic Turing Machine\">NTM</a> for $L$ ", "If $L$ is the language of an NTM then $L \\in \\textbf{RE}$"],
        "lecture": 25,
        "slide":24 
    },
    {
        "name": "Null Set",
        "definition": "A set which contains no elements is called a null set, also represented as $\\phi$.",
        "lecture": 0,
        "slide": 16
    },
    {
        "name": "Odd Number",
        "definition": "An integer $n$ is odd if there exists some integer $k$ such that $n=2k+1$",
        "lecture": 1,
        "slide": 11
    },
    {
        "name": "Ordered Pair",
        "definition": "An ordered pair (a, b) is a pair of elements in a specific order. ",
        "lecture": 5,
        "slide": 65
    },
    {
        "name": "Partial Order",
        "definition": "A partial order is a binary relation which is <a href=\"#Reflexive\">reflexive</a>, <a href=\"#Antisymmetric\">antisymmetric</a>, and <a href=\"#Transitive\">transitive</a>. For example, $\\leq$ is a partial order over $\\mathbb{R}$.",
        "lecture": 12,
        "slide": 42
    },
    {
        "name": "Path",
        "definition": "A path from $v_1$ to $v_n$ is a sequence of nodes $v_1,v_2,\\ldots,v_n$ where $\\{v_k, v_{k+1}\\}\\in E$ for all natural numbers in the range $1\\le k\\le n-1$.",
        "lecture": 6,
        "slide": 9
    },
    {
        "name": "Piecewise Functions",
        "definition": "Functions specified with different rules applying to different elements.",
        "lecture": 10,
        "slide": 75
    },
    {
        "name": "P",
        "definition":"The complexity class $P$ contains all the problems that can be solved in polynomial time",
        "lecture": 25,
        "slide": 63
    },
    {
        "name": "NP",
        "definition":"The complexity class $NP$ contains all the problems where \"yes\" answers can be verfied efficiently (in polynomial time) by a computer",  
        "lecture": 25,
        "slide": 31
    },
    {
        "name": "co-NP",
        "definition":"The complexity class $co$ $NP$ contains all the problems where \"no\" answers can be verfied efficiently (in polynomial time) by a computer",  
        "lecture": 25,
        "slide": 31
    },
    {
        "name": "Cobham-Edmonds Thesis",
        "definition":"A language $L$ can be $\\textit{decided efficiently}$ if there is a $TM$ that decides it in polynomial time",
        "lecture": 25,
        "slide": 60
    },
    {
        "name": "Pigeonhole Principle",
        "definition": "If m objects are placed into n bins, where m&gt;n then some bin contains at least 2 objects.",
        "lecture": 10,
        "slide": 8
    },
    {
        "name": "Planar Graph",
        "definition": "A planar graph is a graph where there is a way to draw it in a 2D plane without any of the edges crossing.",
        "lecture": 6,
        "slide": 57
    },
    {
        "name": "Predicate (First-Order Logic)",
        "definition": "A predicate describes properties of an object. Applying a predicate to arguments produces a proposition, which is either true or false.",
        "lecture": 8,
        "slide": 22
    },
    {
        "name": "Principle of Mathematical Induction",
        "definition": "The principle of mathematical induction states that if $P(0)$ is true and for any $k \\in \\mathbb{N}$, if $P(k)$ being true implies $P(k+1)$ is true, then $P(n)$ is true for all $n \\in \\mathbb{N}$.",
        "lecture": 3,
        "slide": 4
    },
    {
        "name": "Principle of Complete (or Strong) Induction",
        "definition": [
            "The principle of complete (or strong) induction states that if $P(0)$ is true and for any $k \\in \\mathbb{N}$, if $P(0), P(1), \\dots, P(k)$ all being true implies $P(k+1)$ is true, then $P(n)$ is true for all $n \\in \\mathbb{N}$.",
            " "
        ],
        "lecture": 4,
        "slide": 60
    },
    {
        "name": "Proof",
        "definition": "An argument that demonstrates why a conclusion is true.",
        "lecture": 1,
        "slide": 6
    },
    {
        "name": "Proof by Contradiction",
        "definition": "A proof by contradiction works as follows: <ul> <li>To prove that P is true, assume that P is not true.</li> <li>Based on the assumption that P is not true, conclude something impossible.</li> <li>Assuming the logic is sound, the only valid explanation is that the original assumption must have been wrong.</li> <li>Therefore, P can&apos;t be false, so it must be true.</li> </ul> ",
        "lecture": 2,
        "slide": 45
    },
    {
        "name": "Proof by Induction",
        "definition": "A proof by induction is a way to use mathematical induction to show that some result is true for all natural numbers n.",
        "lecture": 3,
        "slide": 6
    },
    {
        "name": "Proposition",
        "definition": "A proposition is a statement that is, by itself, either true or false.",
        "lecture": 7,
        "slide": 5
    },
    {
        "name": "Propositional Logic",
        "definition": "Propositional logic is a mathematical system for reasoning about propositions and how they relate to one another.",
        "lecture": 7,
        "slide": 11
    },
    {
        "name": "Propositional Connective (Logic)",
        "definition": "One of the following: negation, conjunction, disjunction, implication, biconditional, true, false.",
        "lecture": 8,
        "slide": 4
    },
    {
        "name": "Propositional Variable (Logic)",
        "definition": "A propositional variable is a variable that is either true or false.",
        "lecture": 7,
        "slide": 12
    },
    {
        "name": "Power Set",
        "definition": "The power set of any set $S$, written $\\mathcal P \\left({S}\\right)$, is the set of all subsets of $S$, including the empty set and $S$ itself.",
        "lecture": 0,
        "slide": 43
    },
    {
        "name": "Quantifier (First-Order Logic)",
        "definition": "A quantifier is a statement that expresses that some property is true for some or all choices that could be made.",
        "lecture": 8,
        "slide": 29
    },
    {
	"name": "Quine",
	"definition": "A Quine is a program that, when run, prints its own source code.",
	"lecture": 22,
	"slide": 15
    },
    {
        "name": "Rational number",
        "definition": "A rational number is a number that can be written as $r = p/q$ where $p$ and $q$ are integers and $q\\neq 0$.",
        "lecture": 2,
        "slide": 49
    },
    {
	"name": "Recursion Theorem",
	"definition": "Informally, this says it's possible to construct TMs (like <a href=\"#Quine\">Quines</a>) that perform arbitrary computations on their own descriptions. Also called 'Kleene's second recursion theorem.'",
	"lecture": 22,
	"slide": 18
    },
    {
        "name": "Reflexive",
        "definition": [
            "A binary relation R over a set A is called reflexive when, for any element a of A, aRa is true.",
            "Intuitively, a relation is reflexive if every element is related to itself. For example, the relation = over $\\mathbb{R}$ is reflexive, since every real number is equal to itself."
        ],
        "lecture": 12,
        "slide": 9
    },
    {
        "name": "Regular Expression",
        "definition": "A descriptive format used to compactly describe a language",
        "lecture": 16,
        "slide": 12
    },
    {
        "name": "Regular Expression NFA Theorem",
        "definition": [
            "For any regular expression R, there is an NFA N such that:",
            "$\\mathscr{L}(R) = \\mathscr{L}(N)$",
            "N has exactly one accepting state",
            "N has no transitions into its start state",
            "N has no transitions out of its accepting state"
        ],
        "lecture": 16,
        "slide": 40
    },
    {
        "name": "Regular Expression Shorthand",
        "definition": [
            "$R^n$ is shorthand for RR...R",
            "$\\Sigma$ is shorthand for &quot;any character in $\\Sigma$&quot;",
            "R? is shorthand for (R|$\\epsilon$)",
            "R+ is shorthand for RR*"
        ],
        "lecture": 16,
        "slide": 27
    },
    {
        "name": "Regular Language",
        "definition": "A <a href=\"#Formal Language\">language</a> is called a regular language if ,there exists some DFA $D$ such that $\\mathscr{L}(D) = L$, or equivalently, if there exists some NFA $N$ such that $\\mathscr{L}(N) = L$",
        "lecture": 14,
        "slide": 18
    },
    {
        "name": "Regular Language Theorems",
        "definition": [
            "Theorem: If R is a regular expression then $\\mathscr{L}(R)$ is regular",
            "Theorem: If L is a regular language, then there is a regular expression for L."
        ],
        "lecture": 16,
        "slide": 47
    },
    {
        "name": "Self-Inverting Operator",
        "definition": "A binary operator $\\diamond$ with identity element $z$ is called self-inverting when for any $a$ we have: $a\\diamond a=z$",
        "lecture": 1,
        "slide": 57
    },
    {
        "name": "Set",
        "definition": "A Set is an unordered collection of distinct objects, which can be anything (including other sets).",
        "lecture": 0,
        "slide": 12
    },
    {
        "name": "Set builder notation",
        "definition": "A set builder notation is a mathematical notation for describing a set by stating the properties that its members must satisfy.",
        "lecture": 0,
        "slide": 25
    },
    {
        "name": "Simple Cycle",
        "definition": "A simple cycle in a graph is a cycle that does not revisit any nodes or edges (except the start/end node).",
        "lecture": 6,
        "slide": 14
    },
    {
        "name": "Simple Path",
        "definition": "A simple path in a graph is a path that does not revisit any nodes or edges.",
        "lecture": 6,
        "slide": 14
    },
    {
        "name": "String",
        "definition": "A string over an <a href=\"#Alphabet\">alphabet</a> $\\Sigma$ is a finite sequence of characters drawn from $\\Sigma$.",
        "lecture": 14,
        "slide": 3
    },
    {
        "name": "Strong Induction",
        "definition": "See Principle of Complete (or Strong) Induction below.",
        "lecture": 5,
        "slide": 5
    },
    {
        "name": "Subset",
        "definition": "A set $S$ is a subset of set $T$ (denoted $ S \\subseteq T $ ) if all elements of $S$ are also elements of $T$.",
        "lecture": 0,
        "slide": 40
    },
    {
        "name": "Subset Construction",
        "definition": "The construction for transforming any NFA into an equivalent DFA, in which states of the new DFA correspond to sets of states of the NFA. ",
        "lecture": 15,
        "slide": 12
    },
    {
        "name": "Surjective Functions (Surjections)",
        "definition": "A function is called surjective (or onto) if each element of the codomain has at least one element of the domain that maps to it.",
        "lecture": 10,
        "slide": 50
    },
    {
        "name": "Symmetric",
        "definition": [
            "A binary relation R over a set A is symmetric if $\\forall a \\in A. \\forall b \\in A. (aRb \\to bRa)$.",
            "In other words, a relation is symmetric if the order of things which are related doesn&apos;t matter: whenever a is related to b, b is also related to a."
        ],
        "lecture": 12,
        "slide": 11
    },
    {
        "name": "Tape Alphabet (Turing Machines)",
        "definition": "The tape alphabet $\\Gamma$, is a superset of the input alphabet $\\Sigma\\subseteq\\Gamma$, that contains all symbols that can be written onto the tape. It can contain any number of symbols, but always contains at least one blank symbol, denoted by $\\Box$, that is guaranteed not to be in the input alphabet.",
        "lecture": 19,
        "slide": 9
    },
    {
        "name": "Tape Head",
        "definition": "A component of a Turing Machine that can read and write a single memory cell at a time",
        "lecture": 19,
        "slide": 7
    },
    {
        "name": "Total",
        "definition": "A binary relation R over a set A is called total if $\\forall a \\in A. \\forall b \\in A. (aRb \\lor bRa)$. In other words, R is total if any two elements of A can be compared by R.",
        "lecture": 12,
        "slide": 47
    },
    {
        "name": "Total Order",
        "definition": "A total order is a <a href=\"#Partial Order\">partial order</a> which is also <a href=\"#Total\">total</a>. For example, $\\leq$ is a total order over $\\mathbb{R}$.",
        "lecture": 12,
        "slide": 47
    },
    {
        "name": "Tournament",
        "definition": "A tournament is a contest for $n \\ge 1$ people in which each person plays exactly one game against each other person, and there are no ties.",
        "lecture": 4,
        "slide": 39
    },
    {
        "name": "Tournament Graph",
        "definition": "A visual representation of a tournament.",
        "lecture": 4,
        "slide": 39
    },
    {
        "name": "Transitive",
        "definition": [
            "A binary relation R over a set A is transitive if $\\forall a \\in A. \\forall b \\in A. \\forall c \\in A. ((aRb \\land bRc) \\to aRc)$.",
            "Transitive relations can be chained together: whenever a is related to b and b is related to c, we know that a is related to c."
        ],
        "lecture": 12,
        "slide": 13
    },
    {
        "name": "Truth Table",
        "definition": "A truth table is a table showing the truth value of a propositional logic formula as a function of its inputs.",
        "lecture": 7,
        "slide": 14
    },
    {
        "name": "Turing Machine",
        "definition": "A Turing Machine is a finite automaton equipped with an infinite tape as its memory. It consists of three parts: A finite-state control that issues commands, an infinite tape for input and scratch space, and a tape head that can read and write a single tape cell.",
        "lecture": 19,
        "slide": 7
    },
    {
        "name": "Universal Statement",
        "definition": "A universal statement is a statement of the form: &quot;For all $x$, $P(x)$ is true. The negation of an existential statement is an existential statement.",
        "lecture": 1,
        "slide": 37
    },
    {
        "name": "Unordered Pair",
        "definition": "An unordered pair is a set {a, b} of two elements (remember that sets are unordered).",
        "lecture": 5,
        "slide": 65
    },
    {
        "name": "Vacuous Truth",
        "definition": "A statement of the form &quot;All objects of type $P$ are also of type $Q$&quot; is called <i> vacuously true</i> if there are no objects of type $P$.",
        "lecture": 0,
        "slide": 42
    },
    {
        "name": "Verifier",
        "definition":["A <i>verifier</i> for a language is a Turing Machine $V$ with the following properties","$V$ is a decider i:e it halts on all inuts", "For any string $w$ $\\in$ $\\sum*$ it is true that", "$w \\in L$ iff $\\exists c \\in \\sum*. V$ accepts <$w$, $c$>" ],
        "lecture": 25,
        "slide": 4
    },
    {
        "name": "Verifiers and RE",
        "definition":["If there is a verifier $V$ for a language $L$ then $L \\in \\textbf{RE}$", "If $L \\in \\textbf{RE}$, then there is a verifier $V$ for it"], 
        "lecture": 25,
        "slide": 6
    },
    {
        "name": "Victory Chain",
        "definition": "A victory chain in a tournament is a way of lining up the players so that every player beats the player that comes after them.",
        "lecture": 4,
        "slide": 40
    },
    {
        "name": "XOR Operator",
        "definition": "The exclusive or (called XOR for short), is a logical operator, denoted $\\bigoplus$,that operates on two bits and returns 0 if they are the same and 1 if they are different.",
        "lecture": 1,
        "slide": 48
    },
    {
        "name": "Composite",
        "definition": "A natural number n &geq; 2 is called composite if n can be written as p &middot; q for natural numbers p and q, neither of which is 1.",
        "lecture": 20,
        "slide": 11
    },
    {
        "name": "Effective Method of Computation",
        "definition": "Any form of computation with the following properties:<ul>"+
          "<li>The computation consists of a set of steps.</li>"+
          "<li>There are fixed rules governing how one step leads to the next.</li>"+
          "<li>Any computation that yields an answer does so in finitely many steps."+
          "<li>Any computation that yields an answer always yields the correct answer.</li></ul>",
        "lecture": 20,
        "slide": 51
    },
    {
        "name": "Church-Turing Thesis",
        "definition": "The hypothesis that every <a href=\"#Effective Method of Computation\">effective method of computation</a> is either equivalent to or weaker than a Turing machine.",
        "lecture": 20,
        "slide": 52
    },
    {
        "name": "Language (of a Turing Machine)",
        "definition": "The language of a Turing machine $M$, denoted $\\mathscr{L}(M)$, is the set of all strings that $M$ accepts: $$\\mathscr{L}(M) = \\{ w \\in \\Sigma^* \\mid M\\text{ accepts }w \\}$$",
        "lecture": 20,
        "slide": 65
    },
    {
        "name": "Recognizable",
        "definition": "A language is called recognizable if it is the <a href=\"#Language (of a Turing Machine)\">language of some Turing machine</a>.",
        "lecture": 20,
        "slide": 65
    },
    {
        "name": "RE",
        "definition": "The class RE is the set of all <a href=\"#Recognizable\">recognizable</a> languages.",
        "lecture": 20,
        "slide": 65
    },
    {
        "name": "Recognizer",
        "definition": "A Turing machine for a language L is sometimes called a recognizer for L.",
        "lecture": 20,
        "slide": 65
    },
    {
        "name": "Decider",
        "definition": "A decider is a Turing machine which halts on (that is, either accepts or rejects) every input string.",
        "lecture": 21,
        "slide": 15
    },
    {
        "name": "Decidable",
        "definition": ["A language L is decidable if there is a <a href=\"#Decider\">decider</a> M such that $\\mathscr{L}(M) = L$.",
                       "In other words, a language L is decidable if there is a Turing machine which accepts all the strings in L and rejects every other string."],
        "lecture": 21,
        "slide": 16
    },
    {
        "name": "R",
        "definition": ["$\\textbf{R}$ is the set of all the <a href=\"#Decidable\">decidable</a> languages. $\\textbf{R}$ is a proper subset of <a href=\"#RE\">$\\textbf{RE}$</a>: all decidable languages are recognizable, but not all recognizable languages are decidable.",
                       "In other words, $L \\in \\textbf{R}$ if there is a concrete algorithm which can determine for every string w whether $w \\in L$.",
                       "All context-free languages (and therefore all regular languages) are in $\\textbf{R}$."],
        "lecture": 21,
        "slide": 16
    },
    {
        "name": "Encoding",
        "definition": ["Any finite, discrete object O can be encoded as a string, so that it can be analyzed and/or manipulated by a Turing machine.",
                       "We denote the encoding of a single object $O$ by $\\langle O \\rangle$, and the encoding of multiple objects $O_1, O_2, O_3, \\ldots$ by $\\langle O_1, O_2, O_3, \\ldots \\rangle$.",
                       "Any Turing machine can be encoded as a string over its own alphabet. (Analogously, programs are stored in binary, just like all the files they read.)"],
        "lecture": 21,
        "slide": 27
    },
    {
        "name": "Universal Turing Machine",
        "definition": ["There is a universal Turing machine, denoted $U_{TM}$, which, when run on input $\\langle M, w \\rangle$ for a machine M and string w, simulates the run of M on w: it accepts if M accepts, rejects if M rejects, and loops if M loops.",
                       "$U_{TM}$ is effectively a Turing machine representing a general-purpose, programmable computer. Intuitively, its existence means that Turing machines can simulate other Turing machines (e.g. by calling $U_{TM}$ as a subroutine)."],
        "lecture": 21,
        "slide": 36
    },
    {
        "name": "Acceptance Language",
        "definition": ["$A_{TM}$ is the language of the <a href=\"#Universal Turing Machine\">universal Turing machine</a>. In other words, $A_{TM}$ = {$\\langle M, w\\rangle$ | M is a Turing machine that accepts w}.",
                       "<a href=\"http://web.stanford.edu/class/cs103/lectures/22/Small22.pdf#page=25\">We proved</a> that $A_{TM} \\not \\in \\textbf{R}$ even though $A_{TM} \\in \\textbf{RE}$, proving that $\\textbf{R} \\neq \\textbf{RE}$."],
        "lecture": 21,
        "slide": 38
    },
    {
        "name": "Diagonalization Language",
        "definition": ["The diagonalization language, denoted $L_D$, is the language {$\\langle M \\rangle$ | $M$ is a Turing machine that does not accept $\\langle M \\rangle$}.",
                       "<a href=\"http://web.stanford.edu/class/cs103/lectures/21/Small21.pdf#page=62\">We proved</a> that $L_D \\not \\in \\textbf{RE}$."],
        "lecture": 21,
        "slide": 61
    },
    {
        "name": "Matching",
        "definition": "Given an undirected graph $G$, a matching in G is a set of edges such that no two edges share an endpoint.",
        "lecture": 27,
        "slide": 8
    },
    {
        "name": "Maximum Matching",
        "definition": "A maximum matching is a <a href='#matching'>matching</a> with the largest number of edges.",
        "lecture": 27,
        "slide": 8
    },
    {
        "name": "Polynomial-Time Reductions",
        "definition": "A polynomial-time reduction from $A$ to $B$ is a function $f : \\Sigma^* \\rightarrow \\Sigma^*$ such that"
            + "<ul>"
            +   "<li>For any $w \\in \\Sigma^*, w \\in A$ iff $f(w) \\in B$</li>"
            +   "<li>The function $f$ can be computed in polynomial time</li>"
            + "</ul>",
        "lecture": 27,
        "slide": 30
    },
    {
        "name": "Roasted Maple-Glazed Carrots with Thyme and Walnuts",
        "definition": "Delicious, though of questionable nutritional value.",
        "lecture": 27,
        "slide": 45
    },
    {
        "name": "Satisfiability",
        "definition": "A propositional logic formula $\\phi$ is called satisfiable if there is some assignment to its variables that makes it evaluate to true",
        "lecture": 27,
        "slide": 72
    },
    {
        "name": "Satisfying Assignment",
        "definition": "An assignment of true and false to the variables of some propositional logic formula $\\phi$ that makes it evaluate to true is called a satisfying assignment. <br>Alternative definition: an enjoyable problem set.",
        "lecture": 27,
        "slide": 72
    },
    {
        "name": "SAT",
        "definition": "The boolean satisfiability problem (SAT) is the following: given a propositional logic formula $\\phi$, is $\\phi$ satisfiable?",
        "lecture": 27,
        "slide": 72
    },
    {
        "name": "NP-hard",
        "definition": "A language $L$ is called $NP$-hard if for every $L' \\in NP$, we have $L \\leq_p L$.",
        "lecture": 27,
        "slide": 66
    },
    {
        "name": "NP-complete",
        "definition": "A language $L$ is called $NP$-complete if $L$ is $NP$-hard and $L \\in NP$.",
        "lecture": 27,
        "slide": 67
    },
    {
        "name": "Cook-Levin Theorem",
        "definition": "SAT is $NP$-complete (see CS154 for proof).",
        "lecture": 27,
        "slide": 74
    },
    {
        "name": "Literal",
        "definition": "A literal in propositional logic is a variable or its negation.",
        "lecture": 28,
        "slide": 14
    },
    {
        "name": "Clause",
        "definition": "A clause is a many-way OR (disjunction) of literals.",
        "lecture": 28,
        "slide": 14
    },
    {
        "name": "Conjunctive Normal Form (CNF)",
        "definition": "A propositional logic formula $\\phi$ is in conjunctive normal form (CNF) if it is the many-way AND (conjunction) of clauses.",
        "lecture": 28,
        "slide": 15
    },
    {
        "name": "3-CNF",
        "definition": "A propositional formula is in 3-CNF if it is in CNF, and every clause has exactly three literals.",
        "lecture": 28,
        "slide": 19
    },
    {
        "name": "3SAT",
        "definition": ["The language 3SAT is defined as $\\{\\langle\\phi\\rangle \\,\\,|\\,\\, \\phi \\text{ is a satisfiable 3-CNF formula.}\\}$.",
                      "3SAT is $NP$-complete."],
        "lecture": 28,
        "slide": 19
    },
    {
        "name": "Independent Set",
        "definition": "An independent set in an undirected graph is a set of nodes that have no edges between them.",
        "lecture": 28,
        "slide": 26
    },
    {
        "name": "Independent Set Problem",
        "definition": ["Given an undirected graph $G$ and a natural number $n$, the independent set problem is:",
                        "Does $G$ contain an independent set of size at least $n$?", "This problem is $NP$-complete."],
        "lecture": 28,
        "slide": 27
    },
    {
        "name": "3-Coloring Problem",
        "definition": ["The 3-coloring problem is:",
                        "Given an undirected graph $G$, is there a legal 3-coloring of its nodes?",
                        "As a formal language:",
                        "3COLOR = $\\{ \\langle G\\rangle \\,\\,|\\,\\, G \\text{is an undirected graph with a legal 3-coloring.} \\}$",
                        "3COLOR is known to be $NP$-complete.",
                        "See also: <a href=\"#k-colorable\">k-colorable</a>."],
        "lecture": 28,
        "slide": 27
    },
];
