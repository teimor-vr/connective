FROM gitpod/workspace-postgres
ENV TRIGGER_REBUILD 14

# # Install custom tools, runtimes, etc.
# # For example "bastet", a command-line tetris clone:
# # RUN brew install bastet
# #
# # More information: https://www.gitpod.io/docs/config-docker/
#RUN sudo apt-get update  && sudo apt-get install -y   redis-server  && sudo rm -rf /var/lib/apt/lists/* && brew update && brew install mailhog

#COPY server/requirements temp_requirements

#RUN pip install -r temp_requirements/local.txt

#COPY . .

# RUN echo "export PIP_USER=false" >> /home/gitpod/.bashrc
# RUN echo "export CELERY_BROKER_URL=redis://localhost:6379/0" >> /home/gitpod/.bashrc