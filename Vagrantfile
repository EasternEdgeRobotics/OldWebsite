number_of_cpus = 1
memory = 512 # MiB
$script = <<SCRIPT
sudo apt-get install -y ruby-dev
echo "PATH=$(ruby -rubygems -e 'puts Gem.user_dir')/bin:$PATH" >> .profile
source .profile
gem install --user-install --no-document jekyll sass
SCRIPT

Vagrant.configure(2) do |config|
    config.vm.define "website" do |website|
        website.vm.box = "ubuntu/vivid64"
        website.vm.synced_folder ".", "/vagrant", disabled: true
        website.vm.synced_folder ".", "/home/vagrant/easternedgerobotics.github.io"
        website.vm.network "forwarded_port", guest: 4000, host: 4000
        website.vm.provision "shell", privileged: false, inline: $script
        website.vm.provider "virtualbox" do |virtualbox|
            virtualbox.customize ["modifyvm", :id, "--cpus", number_of_cpus]
            virtualbox.customize ["modifyvm", :id, "--memory", memory]
            virtualbox.customize ["modifyvm", :id, "--cpuexecutioncap", "60"]
        end
    end
end
