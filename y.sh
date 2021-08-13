sd '^(Definition) (\d).' '## $1 $2' *.md
sd '^(Theorem) (\d).' '## $1 $2' *.md
sd '^(Remark) (\d).' '## $1 $2' *.md
sd '^(Example) (\d).' '## $1 $2' *.md
sd '^(Proposition) (\d).' '## $1 $2' *.md
sd '^(Corollary) (\d).' '## $1 $2' *.md

sd '^Proof.' '### Proof\n' *.md

