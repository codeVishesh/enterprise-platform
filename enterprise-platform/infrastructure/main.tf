provider "aws" {
  region = "us-east-1"
}

resource "aws_vpc" "enterprise_vpc" {
  cidr_block = "10.0.0.0/16"
}

resource "aws_instance" "backend" {
  ami           = "ami-123456"
  instance_type = "t2.micro"

  tags = {
    Name = "EnterpriseBackend"
  }
}