---
layout: default
title: KEC Computer Build Tool Installation and H Drive Mounting
---

This page contains a step-by-step guide through the steps required to finalize the WSL2 installation on KEC lab computers. **Note that the Linux virtual machine is configured on a per machine basis. Therefore, if you use different computers in KEC, you'll need to run these steps on each.**
<br><br>



## Part 1: Create a username/password in your Linux Virtual Machine

---

* **Step 1:** Start your Linux Virtual Machine by running **Ubuntu** from the Windows Start/Applications menu.

* **Step 2:** If this is your first time running the Linux Virtual Machine on the lab computer you should see a prompt in the Linux terminal to "Enter new UNIX username". Here, you will need to create a username and password.  This is NOT the same username and password that you use to log into Windows. This account is specifically for the Linux virtual machine.  However, you can certainly use the same username and password for Windows and your Linux VM if you like. **Create your Linux username and password to finalize the installation.**
<br><br><br>



## Part 2: Install Build Tools (Required packages for CS350, CS420, etc.)

---

Your Linux VM should still be running. If not, you can restart your Linux VM by running it from the Windows Start/Applications menu.

* **Step 1:** Copy and paste the following command into your **Linux terminal** to update your WSL network settings.

> ```
> echo "nameserver 8.8.8.8" | sudo tee /etc/resolv.conf
> ```

* **Step 2:** Copy and paste the following command into your **Linux terminal** to update the package manager. You will be prompted for the password that you recently created for this Linux VM. Enter your password to proceed.

> ```
> sudo apt-get -y update
> ```


* **Step 3:** Copy and paste the following line into your new **Linux terminal** to install required build tools and packages. This may take a few minutes.

> ```
> sudo apt-get -y install build-essential
> ```


* **Step 4:** Copy and paste the following line into your new **Linux terminal** to install the remaining required packages. This may take a few minutes.

> ```
> sudo apt-get -y install make cmake gcc clang gdb valgrind curl wget git perl zip
> ```


* **Step 5:** Copy and paste the following line into your new **Linux terminal** to ensure  that your Windows and Linux filesystems and applications can interact properly.

> ```
> sudo wget -O /etc/wsl.conf https://raw.githubusercontent.com/ycpcs/dev-env-setup-guide/gh-pages/prog_envs/_config/wsl.conf
> ```

<br><br>



## Part 3: Add Required Certificate Authority to WSL Environment

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


* **Step 3:** Copy and paste the following line into your **Linux terminal** to run the YCP CS CA updater script and add the required Certificate Authority (CA) to your WSL environment. Enter your Linux/WSL password when prompted to complete the update.

> ```
> /tmp/install_cs_ca_cert.sh
> ```

<br><br>



## Part 4: Mount the H Drive

---

Your Linux VM should still be running. If not, you can restart your Linux  VM by running it from the Windows Start/Applications menu.

* **Step 1:** Copy and paste the following command into your **Linux terminal** to create a mount point for your H: drive.  You'll be prompted for your Linux VM password.

> ```
> sudo mkdir -m 777 /mnt/h
> ```


* **Step 2:** In the same terminal window, copy and paste the following command to make a permanent entry into your file-systems table.  This will ensure that your H: drive is mounted each and every time your start your Linux virtual machine.

> ```
> echo "H:\ /mnt/h drvfs noatime,uid=1000,gid=1000,metadata,defaults 0 0" | sudo tee -a /etc/fstab > /dev/null
> ```


* **Step 3:** In the same terminal window, copy and paste the following command to mount 
the H: drive in your current terminal session.

> ```
> sudo mount -a
> ```

* **Step 4:** Restart WSL to mount your H: drive. 

<br>


---

## Congratulations, you’re now running Linux in Windows.

--- 
