---
layout: default
title: macOS Build Tools Installation
---

This page contains a step-by-step guide to get your programming environment setup on macOS.
<br><br>



## Download and Install Development Tools

---

* **Step 1:** Install the required development tools.  Open your **Terminal** application (**Applications -> Utilities**) and run the following command:

> ```shell
> sudo xcode-select --install
> ```


* **Step 2 (M-series Macs only):** If you have an **M-series ARM** processor in your Mac, you'll need to install **Rosetta 2** to translate `x86` instructions to `ARM` instructions. Open your **Terminal** application (**Applications -> Utilities**) and run the following command:

> ```shell
> /usr/sbin/softwareupdate --install-rosetta --agree-to-license
> ```
<br>

---

### Done.

--- 
