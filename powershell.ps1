# Variables
$resourceGroupName = "MyResourceGroup"
$location = "EastUS"
$vmName = "MyVM"
$image = "UbuntuLTS"
$adminUsername = "azureuser"
$adminPassword = "P@ssw0rd123!" # Replace with a secure password

# Login to Azure
az login

# Create a resource group
az group create --name $resourceGroupName --location $location

# Create a virtual network
az network vnet create --resource-group $resourceGroupName --name "${vmName}VNet" --subnet-name "${vmName}Subnet"

# Create a public IP address
az network public-ip create --resource-group $resourceGroupName --name "${vmName}PublicIP"

# Create a network security group
az network nsg create --resource-group $resourceGroupName --name "${vmName}NSG"

# Create a network interface card (NIC)
az network nic create --resource-group $resourceGroupName --name "${vmName}NIC" --vnet-name "${vmName}VNet" --subnet "${vmName}Subnet" --network-security-group "${vmName}NSG" --public-ip-address "${vmName}PublicIP"

# Create the virtual machine
az vm create --resource-group $resourceGroupName --name $vmName --image $image --admin-username $adminUsername --admin-password $adminPassword --nics "${vmName}NIC"

# Open port 22 for SSH
az vm open-port --resource-group $resourceGroupName --name $vmName --port 22

# Output the public IP address of the VM
$publicIP = az vm list-ip-addresses --resource-group $resourceGroupName --name $vmName --query "[].virtualMachine.network.publicIpAddresses[].ipAddress" --output tsv
Write-Host "The public IP address of the VM is: $publicIP"