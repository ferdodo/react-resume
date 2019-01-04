

default:
	docker build . -t react-resume-build
	docker run react-resume-build | tee ../build.tar | tar t

clean:
	rm -f ../build.tar