from brownie import *
from scripts.helpful_scripts import get_Testaccount

def main():
    testAccount = get_Testaccount()
    Contract = InfinityTower.deploy({"from": testAccount},publish_source=True)