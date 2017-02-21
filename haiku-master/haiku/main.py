import haiku, syllables, markovify, generator, sys

def main():
    haiku_generator = generator.Generator(corpus_directory='res/corpus_texts/')
    output = haiku.get_pretty_string(haiku_generator.generate_haiku())
    print(output)
    sys.stdout.flush()
    
if __name__ == '__main__':
    main()
