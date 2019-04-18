FROM mongo:3
# TODO create some script for bootstrap data etc
RUN \
 apt-get update && apt-get dist-upgrade -y --force-yes && \
 apt-get install psmisc -y -q && \
 apt-get autoremove -y && apt-get clean && \
 rm -rf /var/cache/* && rm -rf /var/lib/apt/lists/*
