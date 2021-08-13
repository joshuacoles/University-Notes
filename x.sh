sd '^(Definition) (\d\.\d+)\.$' '## $1 $2' *.md
sd '^(Theorem) (\d\.\d+)\.$' '## $1 $2' *.md
sd '^(Remark) (\d\.\d+)\.$' '## $1 $2' *.md
sd '^(Example) (\d\.\d+)\.$' '## $1 $2' *.md
sd '^(Proposition) (\d\.\d+)\.$' '## $1 $2' *.md
sd '^(Corollary) (\d\.\d+)\.$' '## $1 $2' *.md
sd '^(Lemma) (\d\.\d+)\.$' '## $1 $2' *.md

sd '^Proof.' '### Proof\n' *.md

# sd 'ℚ' '\Q' *.md
# sd 'ℤ' '\Z' *.md
# sd 'ℂ' '\C' *.md
# sd 'ℝ' '\R' *.md
# sd '𝔽' '\F' *.md
# sd 'ℙ' '\P' *.md

# sd '\\text\{\}' '' *.md
# sd '& =' '&=' *.md
# sd '& ' '' *.md

# sd '\\left' '' *.md
# sd '\\right' '' *.md

# sd '\( ' '(' *.md
# sd ' \)' ')' *.md

# sd '\s+,' ',' *.md

# sd '\(col\)' '\col' *.md


