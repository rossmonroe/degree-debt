import React, { Component } from 'react';

import '../style/css/Global.css';

import LearnInfo from '../components/LearnInfo.js';
import ScrollableAnchor from 'react-scrollable-anchor';

class Learn extends Component {
  render() {
    return (
      <div class='page-wrapper'>
      <ScrollableAnchor id={'learn'}>
        <LearnInfo/>
        </ScrollableAnchor>
        <div className='separator margin-10'></div>
        <div class='page-content'>
            <h3>How do loans work?</h3>
            <p>If you have ever borrowed money from someone else and paid them back, you took out a loan. Usually though, a loan is money borrowed from either a bank, the government, or a company. When you get a loan you are expected to pay back the loan within a certain time frame and pay them a fee as well. This fee is called interest and its why loans are given out to people, because companies can make money from them.</p>
            <p>Let’s say you need to get a loan of $10,000 for your 1st year of college. Federal loans usually have an interest rate of around 5%. This means that by the time you have paid all of the money back to the government, you have paid them $10,500. The fee you paid to borrow that money was $500 for that year.</p>
            <p>For private loans, you can sometimes see interest rates as high as 18%. That means instead of paying back $10,500 you’re paying back $11,800. Thats $1,500 more for the same amount of money. Not only that but a private loan may have terms that you need to pay it back in 7 years instead of the 10 to 25 years for a federal loan.</p>
            <p>This is why it’s very important to review the terms of a loan before accepting it.</p>

            <h3>What happens when I accept a loan?</h3>
            <p>There are two outcomes and it depends on the type of loan you get. For a private loan, the money is directly given to you and you have manage the full amount. This can be a bit daunting to have that much money sitting in an account, and it opens the door to be tempted to use it for other things. Theres stories of students ending up with $80,000 in loans when they only needed $50,000 for their college expenses. Be careful!</p>
            <p>For a Federal loan, the money is given to the school, which then uses it to pay for tuition, fees, and on campus housing. Once they have taken out all of the necessary costs they then give you the rest of the money through a direct deposit to your bank account. This process is usually done quarterly so it makes managing your money a bit easier and removes some of the headaches involved.</p>


            <h3>Where can I apply for loans?</h3>
            <p>For student loans from the government, the application is called FASFA (Free Application for Federal Student Aid) and can be found <a href="https://studentaid.ed.gov/sa/fafsa">here</a>. There are private loan applications from banks and others, but it’s best to stay away from those because of some of the terms. There are many out there and we encourage you to search if you have to go this route, but hopefully you can avoid it.</p>

            <h3>How do I estimate the cost of college?</h3>
            <p>This seems like it would be a very hard process, but the government actually requires public colleges to calculate average costs of attending per year. This is to make sure students get the appropriate amount of money and don’t over borrow. </p>
            <p>This information can be found on most colleges websites, but another great resource is college scorecard.ed.gov. This site is where we get our data to help calculate student loans and repayment. They also have the cost of college and other interesting information you can get just by searching for a school.</p>
            <p>One thing to remember is that these costs are estimates and can change over time. If one year the loan is not enough or it is too much you can always request that it be changed to better fir your needs.</p>


            <h3>Resources</h3>
            <p>Here are some extra resources to learn more about students loans and the costs of attending college.</p>
            <p><strong>More about loans:</strong><br/>
            <ul>
              <li><a href="https://studentloans.gov/myDirectLoan/index.action">StudentLoans.gov</a></li>
              <li><a href="https://studentaid.ed.gov/sa/types/loans">Types of Aid</a></li>
            </ul>
            
            </p>
            <p><strong>Costs of College:</strong><br/>
            <ul>
              <li><a href="https://bigfuture.collegeboard.org/pay-for-college/college-costs">College Board</a></li>
              <li><a href="https://www.debt.org/students/the-true-cost-of-college/">Debt.org</a></li>
            </ul>
            </p>
        </div>
      </div>
    );
  }
}

export default (Learn);