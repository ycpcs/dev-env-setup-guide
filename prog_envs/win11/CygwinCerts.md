---
layout: default
title: Cygwin Certificate Installation
---

* **Step 1** Install the **wget** package in Cygwin. This can be done by re-running the installation executable and selecting the **wget** package under the **net** category.

<br>

* **Step 2:** Copy and paste the following command into your **Cygwin terminal** to download the YCP CS Certificate Authority (CA) updater script.

    > ```
    > wget -O /tmp/install_cs_ca_cert.sh https://raw.githubusercontent.com/ycpcs/dev-env-setup-guide/gh-pages/prog_envs/_config/install_cs_ca_cert.sh
    > ```
  
<br>

* **Step 3:** Copy and paste the following line into your **Cygwin terminal** to set the required permissions on the YCP CS CA updater script.

    > ```
    > chmod 700 /tmp/install_cs_ca_cert.sh
    > ```

<br>

* **Step 4:** Copy and paste the following line into your **Cygwin terminal** to run the YCP CS CA updater script and add the required CA to your Cygwin environment.

    > ```
    > /tmp/install_cs_ca_cert.sh
    > ```

<br>

You should now be able to execute **'make submit'** for CS101 submissions to Marmoset.