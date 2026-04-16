---
layout: default
title: Build Tools Installation
---

This page contains a step-by-step guide through the installation of the build tools required for most YCP CS courses.
<br><br>


## Section 1: Install Build Tools (Required packages for CS350, CS420, etc.)

---

* **Step 1:** Open your **Ubuntu Linux terminal** by typing **Ubuntu** into the search box in the Windows taskbar.  Depending on the state of your machine, you **MAY** see multiple installations of the **Ubuntu Linux terminal**.  Be sure to select and run the correct version, **Ubuntu-24.04**.


* **Step 2:** Copy and paste the following command into your **Linux terminal** to update the package manager. You will be prompted for the password that you recently created for this Linux VM. Enter your password to proceed. If CTRL-V doesn't work to paste, then simply right-clicking in the terminal window should paste your clipboard contents.

    > ```
    > sudo apt-get -y update
    > ```


* **Step 3:** Copy and paste the following line into your **Linux terminal** to install required build tools and packages. This may take a few minutes.

    > ```
    > sudo apt-get -y install build-essential
    > ```


* **Step 4:** Copy and paste the following line into your **Linux terminal** to install the remaining required packages. This may take a few minutes.

    > ```
    > sudo apt-get -y install make cmake gcc clang gdb valgrind curl wget git perl zip
    > ```


* **Step 5:** Copy and paste the following line into your **Linux terminal** to ensure that your Windows and Linux filesystems and applications can interact properly.

    > ```
    > sudo wget -O /etc/wsl.conf https://raw.githubusercontent.com/ycpcs/dev-env-setup-guide/gh-pages/prog_envs/_config/wsl.conf
    > ```

* **Step 6:** Restart your WSL instance for the newest changes to take effect. Exit all instances of the **Linux terminal** that you may be running. Open the Windows **Command Prompt** by typing **cmd** into the search box in the Windows taskbar.  In the Windows **Command Prompt**, run the following command.

  > ```
  > wsl --shutdown
  > ```
  
* **Step 7:** Close the Windows **Command Prompt** and open your **Linux terminal** to verify that everything works as expected.
<br><br><br>



## Section 2: Add Required Certificate Authority (CA) to WSL Environment 

---

Your Linux VM should still be running. If not, you can restart your Linux VM by running it from the Windows Start/Applications menu.

* **Step 1:** Copy and paste the following command into your **Linux terminal** to download the YCP CS CA updater script.

    > ```
    > wget -O /tmp/install_cs_ca_cert.sh https://raw.githubusercontent.com/ycpcs/dev-env-setup-guide/gh-pages/prog_envs/_config/install_cs_ca_cert.sh
    > ```


* **Step 2:** Copy and paste the following line into your **Linux terminal** to set the required permissions on the YCP CS CA updater script.

    > ```
    > chmod 700 /tmp/install_cs_ca_cert.sh
    > ```


* **Step 3:** Copy and paste the following line into your **Linux terminal** to run the YCP CS CA updater script and add the required CA to your WSL environment. Enter your Linux/WSL password when prompted to complete the update.

    > ```
    > /tmp/install_cs_ca_cert.sh
    > ```

<br>

---

**Continue to:** [Create a JetBrains Account](../common/create_jetbrains_account.html)

--- 
