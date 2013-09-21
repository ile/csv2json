LOCALE ?= en_US

GENERATED_FILES = \
	csv2json.js \
	csv2json.min.js

all: $(GENERATED_FILES)

csv2json.js: $(shell node_modules/.bin/smash --list src/index.js) package.json
	@rm -f $@
	node_modules/.bin/smash src/index.js | node_modules/.bin/uglifyjs - -b indent-level=2 -o $@
	@chmod a-w $@

csv2json.min.js: csv2json.js bin/uglify
	@rm -f $@
	bin/uglify $< > $@

clean:
	rm -f -- $(GENERATED_FILES)
