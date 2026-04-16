---
layout: default
title: KEC Computer Ubuntu Installation and H Drive Mounting
---

This page contains a step-by-step guide through the steps required to finalize the WSL2 installation on KEC lab computers. **Note that the Linux virtual machine is configured on a per machine basis. Therefore, if you use different computers in KEC, you'll need to run these steps on each.**
<br><br>



## Section 1: Install Ubuntu 24.04 LTS Virtual Machine

---

<!--
* **Step 1:** Start your Linux Virtual Machine by running **Ubuntu** from the Windows Start/Applications menu.

* **Step 2:** If this is your first time running the Linux Virtual Machine on the lab computer you should see a prompt in the Linux terminal to "Enter new UNIX username". Here, you will need to create a username and password.  This is NOT the same username and password that you use to log into Windows. This account is specifically for the Linux virtual machine.  However, you can certainly use the same username and password for Windows and your Linux VM if you like. **Create your Linux username and password to finalize the installation.**
<br><br><br>
-->

* **Step 1:** Open the Windows **Command Prompt** by typing **cmd** into the search box in the Windows taskbar and running the **Command Prompt** application.

* **Step 2:** To install Ubuntu Linux 24.04 LTS run the following command in your newly opened **Command Prompt** window.
  > ```
    > wsl --install -d Ubuntu-24.04
    > ```
    * Do NOT close the terminal window while the installation is running.
    * Do NOT click anywhere in the terminal window as this will put the terminal window
      into a "text-selection mode".  While in "text-selection mode", the terminal will not
      update and will not appear to make any progress.  So, your installation may be complete,
      but you won't know.  If you accidentally clicked in the terminal window, you can exit
      "text-selection mode" by simple pressing your **Enter** key.

* **Step 3:** When the installer finishes, you should see a prompt in your terminal to "Create a default Unix user account". Here, you will need to create a username and password.  This doesn't have to be the same username and password that you use to log into Windows, but it can be if you wish. This account is specifically for the Linux virtual machine that you just created. **Create your Linux username and password to finalize the installation.**

* **Step 4:** After the WSL2 installation is complete, your Windows Command Prompt should change into a Linux terminal. If not, you can run a new instance of your newly installed Linux terminal by using the Windows search bar and searching for "Ubuntu".

<br><br>



## Section 2: Mount the H Drive

---

Your Linux VM should still be running. If not, you can restart your Linux  VM by running it from the Windows Start/Applications menu.

* **Step 1:** Copy and paste the following command into your **Linux terminal** to create a mount point for your H: drive.  You'll be prompted for your Linux VM password.

    > ```
    > sudo mkdir -m 777 /mnt/h
    > ```


* **Step 2:** In the same terminal window, copy and paste the following command to make a permanent entry into your file-systems table.  This will ensure that your H: drive is mounted each and every time your start your Linux virtual machine.

    > ```
    > echo "H: /mnt/h drvfs noatime,uid=1000,gid=1000,metadata,defaults 0 0" | sudo tee -a /etc/fstab > /dev/null
    > ```


* **Step 3:** In the same terminal window, copy and paste the following command to mount 
the H: drive in your current terminal session.

    > ```
    > sudo mount -a
    > ```

* **Step 4:** In the same terminal window, copy and paste the following command to reload configuration files from disk.

    > ```
    > sudo systemctl daemon-reload
    > ```
  
<br>


---

**Continue to:** [Install Build Tools in the WSL2 Linux Terminal](./win11_wsl2_build_tool_installation.html)

--- 
