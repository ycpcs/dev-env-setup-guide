---
layout: default
title: Windows 11 WSL2 and Ubuntu Installation
---

This page contains a step-by-step guide through the installation of WSL2 on Windows 11.
<br><br>


## Part 1: Enable Virtualization in your PC BIOS/UEFI

---

Before you can install and run virtual machines on your computer, you must enable a feature in your computer's BIOS/UEFI.  Most computers are shipped from the manufacturer with this feature disabled.
<br>

### Part 1(a): Access your computer's BIOS/UEFI

---

There are multiple ways to get into your computer's BIOS/UEFI.  Select the method that you prefer below:

#### <u>Method #1: Enter BIOS/UEFI during boot process</u>

* **Step 1:** Reboot your computer (read **Step 2** before executing **Step 1**).

* **Step 2:** As your computer is booting and coming up from the black screen you may see a manufacturer's logo and/or some text describing the memory capacity and other specifications of your computer.  During this phase of the boot process, rapidly continue to press **Delete**, **Esc**, **F1**, **F2**, or **F4** to enter the **Setup Menu** (i.e. BIOS/UEFI). Each computer manufacturer uses a different key but your computer may show a brief message at boot indicating which key you need to press. You'll only have one or two seconds to find and press the right key so be ready!  If you see the Windows boot logo, you've already missed it.  You can reboot and try again or move on to Method #2/3.

 * **Step 3:** Once in your BIOS/UEFI, continue following the instructions in Part 1(b).


#### <u>Method #2: Enter BIOS/UEFI from Windows 11 Settings panel</u>

* **Step 1:** Find and click on the Windows logo in your taskbar then select Settings to open up the Settings app.

* **Step 2:** In Settings, click on "Windows Update" in the left sidebar.

* **Step 3:** In the "Windows Update" settings, select "Advanced options".

* **Step 4:** In "Advanced options", select "Recovery" under "Additional options".

* **Step 5:** In the "Recovery" menu, click on "Restart now" in the under "Advanced startup" section. This will allow you to reboot your computer for restoration and some configurations. You may see a prompt stating, "We’ll Restart Your Device So Save Your Work". In this prompt, click "Restart Now" to restart your computer.

* **Step 6:** When your computer reboots, you'll see a blue background menu containing options like "Continue", "Troubleshoot", and "Turn off your PC". Click on "Troubleshoot".

* **Step 7:** Click on "Advanced options".

* **Step 8:** Select "UEFI Firmware Settings" and then "Restart" to enter your computer BIOS/UEFI.

* **Step 9:** Once in your BIOS/UEFI, continue following the instructions in Part 1(b).


### Part 1(b): Find and enable virtualization settings

---

* **Step 1:** In the BIOS/UEFI settings, find the configuration settings related to the **CPU**. These can be found under the headings **Processor**, **Chipset**, or **Northbridge**.

* **Step 2:** Enable virtualization.  The setting may be called **VT-x**, **AMD-V**, **SVM**, or **Vanderpool**.  Enable **Intel VT-d** or **AMD IOMMU** if the options are available.

* **Step 3:** Save your changes and reboot. 
<br><br><br>



## Part 2: Install WSL2 and an Ubuntu 24.04 LTS Virtual Machine

---

This guide was developed using [Microsoft's official documentation here](https://docs.microsoft.com/en-us/windows/wsl/install-win10). It is recommended that you follow along with THIS guide as it includes some additional steps beyond what the Microsoft guide provides. These additional steps will ensure that you install all the packages required for your YCP CS courses.

* **Step 1:** Open the Windows **Command Prompt** as an Administrator by typing **cmd** into the search box in the Windows taskbar.  You should see the option to **Run as Administrator** on the right-hand side of the search results. Click on **Run as Administrator** to open the Windows **Command Prompt**.  When the **User Account Control** prompt asks "Do you want to allow this app to make changes to your device", click **Yes**.

* **Step 2:** To install WSL2 along with Ubuntu Linux 24.04 LTS run the following command in your newly opened **Command Prompt** window.
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

* **Step 5:** Exit all instances of the **Linux terminal** and the Windows **Command Prompt** that you may be running.
<br><br>

---

### Congratulations, you’re now running Linux in Windows 11.

**Continue to Part 2:** [Install Build Tools in the WSL2 Linux Terminal](./win11_wsl2_build_tool_installation.html)

--- 
