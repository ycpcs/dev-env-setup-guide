#!/usr/bin/env bash


####################################################
# Cert file info
####################################################
cert_file_url="http://crt.sectigo.com"
cert_file_name="InCommonRSAServerCA2"


####################################################
# determine system
####################################################
uname_out="$(uname -sr)"
uname_out_lower=$( tr '[:upper:]' '[:lower:]' <<<"$uname_out" )

case "${uname_out_lower}" in
	darwin*)
		detected_system='macOS'
		echo 'No cert updates required on macOS'
		exit 0
		;;
	linux*microsoft*)
		detected_system='WSL'
		local_user_certs="/usr/local/share/ca-certificates"
		cp_cmd="sudo cp"
		update_cmd="sudo update-ca-certificates"
		;;
	linux*)
		detected_system='Linux'
		local_user_certs="/usr/local/share/ca-certificates"
		cp_cmd="sudo cp"
		update_cmd="sudo update-ca-certificates"
		#local_user_certs="/etc/pki/ca-trust/source/anchors"
		#cp_cmd="sudo cp"
		#update_cmd="sudo update-ca-trust extract"
		;;
	cygwin*)
		detected_system='Cygwin'
		local_user_certs="/etc/pki/ca-trust/source/anchors"
		cp_cmd="cp"
		update_cmd="update-ca-trust extract"
		;;
	*) 
		detected_system='Unknown OS'
		exit 0
		;;
esac


echo "Detected System: ${detected_system}"
####################################################
# download cert file and convert from .crt to .pem
####################################################
curl -s -o "/tmp/${cert_file_name}.crt" "${cert_file_url}/${cert_file_name}.crt"
openssl x509 -in "/tmp/${cert_file_name}.crt" -inform DER -out "/tmp/${cert_file_name}.pem.crt" -outform PEM

####################################################
# update the system certs
####################################################
$cp_cmd "/tmp/${cert_file_name}.pem.crt" "${local_user_certs}/."
$update_cmd
