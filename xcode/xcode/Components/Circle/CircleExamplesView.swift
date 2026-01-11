
import SwiftUI

struct CircleExamplesView: View {
    var body: some View {
        List {
            Circle()
                .fill(Color.blue)
                .frame(width: 100, height: 100)
                .navigationTitle("Default Circle")
            
            Circle()
                .stroke(Color.red, lineWidth: 5)
                .frame(width: 100, height: 100)
                .navigationTitle("Stroked Circle")
            
            Circle()
                .trim(from: 0.2, to: 0.8)
                .stroke(Color.green, lineWidth: 10)
                .frame(width: 100, height: 100)
                .rotationEffect(.degrees(-90))
                .navigationTitle("Trimmed Circle")
        }
        .navigationTitle("Circle Examples")
    }
}

struct CircleExamplesView_Previews: PreviewProvider {
    static var previews: some View {
        CircleExamplesView()
    }
}
