S3_BUCKET:="spaceapps.szczecin.pl"
AWS_PROFILE:=szczecintech

.PHONY: web-deploy

web-deploy:
	AWS_PROFILE=${AWS_PROFILE} aws s3 sync website/ s3://spaceapps.szczecin.pl/

