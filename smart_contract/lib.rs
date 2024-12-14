#![cfg_attr(not(any(feature = "export-abi", test)), no_main)]

extern crate alloc;
use stylus_sdk::{ alloy_primitives::{ U8, U128, Address }, prelude::*, stylus_proc::entrypoint };
use stylus_sdk::{ msg };

sol_storage! {
    #[entrypoint]
    pub struct TalentHub {
        mapping(uint128 => Job) jobs;
        uint128 job_counter;
    }

    pub struct Job {
        string description; // job description
        uint128 budget; // client's budget
        address client; // client's wallet address
        address talent; // talent's wallet address
        bool is_completed; // state of completion
    }
}

#[public]
impl TalentHub {
    // Initializing the contract
    pub fn initialize(&mut self) {
        self.job_counter.set(U128::from(0));
    }

    // Posting a job listing
    pub fn post_job(&mut self, description: String, budget: u128, talent: Address) {
        let job_id = self.job_counter.get();
        let client = msg::sender();
        let mut job_template = self.jobs.setter(job_id);
        job_template.description.set_str(description);
        job_template.budget.set(U128::from(budget));
        job_template.client.set(client);
        job_template.talent.set(talent);
        job_template.is_completed.set(false);
        self.job_counter.set(job_id + U128::from(1));
    }

    // Applying for a job
    pub fn apply_for_job(&mut self, job_id: u128) {
        let talent = msg::sender();

        let mut job = self.jobs.setter(U128::from(job_id));

        job.talent.set(talent)
    }

    // Marking project as completed and transferring funds
    pub fn complete_project(&mut self, job_id: u128) {
        let client = msg::sender();

        let mut job = self.jobs.setter(U128::from(job_id));

        if job.client.get() == client && !job.is_completed.get() {
            job.is_completed.set(true);
        }
    }
}
[
    {
        "inputs": [],
        "name": "initialize",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "string",
                "name": "description",
                "type": "string"
            },
            {
                "internalType": "uint128",
                "name": "budget",
                "type": "uint128"
            },
            {
                "internalType": "address",
                "name": "talent",
                "type": "address"
            }
        ],
        "name": "postJob",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint128",
                "name": "job_id",
                "type": "uint128"
            }
        ],
        "name": "applyForJob",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint128",
                "name": "job_id",
                "type": "uint128"
            }
        ],
        "name": "completeProject",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    }
]

## Testing the Smart Contract
contract size: 15.0 KB
wasm data fee: 0.000085 ETH
deployed code at address: 0xbab70c3766e3ad630b17e0588a381be1e620b97a
deployment tx hash: 0x448ec88b748b7d7d3f67d17c16486e529c86bfaef4be1954766dcbecd4e0d060
contract activated and ready onchain with tx hash: 0xeee324759693555381895b173b00984c528db0b18725a6f8e9dea83a3d604cf1